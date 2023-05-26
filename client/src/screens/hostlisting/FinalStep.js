import * as React from "react";
import Box from "../../utility/Box";
import { Text, Button, Image } from "react-native-ui-lib";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { ScrollView, ToastAndroid, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { colors } from "../../presets";
import * as networkClient from "../../helper/networkClient";
import * as storeManager from "../../helper/sharedPrefrences";
import { type } from "../../helper/CONSTANT";
import Overlay from "../../components/Overlay";
const ERROR_IMAGE = require("../../../assets/No_Image_Available.jpg");

export const getFileInfo = async (fileURI) => {
  const fileInfo = await FileSystem.getInfoAsync(fileURI);
  return fileInfo;
};

export const isLessThanTheMB = (fileSize, smallerThanSizeMB) => {
  const isOk = fileSize / 1024 / 1024 < smallerThanSizeMB;
  return isOk;
};

export default ({ navigation, ...props }) => {
  const [images, setImages] = React.useState([]);
  const [isUploading, setUploading] = React.useState(false);
  const [status, setStatus] = React.useState("");
  const { details } = props.route.params;

  const pickImage = async () => {
    console.log(details);
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.clear();
    console.log(result);

    if (!result.canceled) {
      setImages([...images, ...result.assets]);
    }
  };
  const removeImage = (image, index) => {
    setImages(images.filter((item, i) => i !== index));
  };

  const onPublish = () => {
    setUploading(true);
    networkClient.POST(
      {
        type: type.CREATE_LISTING,
        ...details,
      },
      (result) => {
        console.log(result);
        if (result.status === 200) {
          const room_id = result.data.id;

          images.map(async (image, index) => {
            const fileInfo = await getFileInfo(image.uri);
            let name = fileInfo.uri.split("/");
            name = name[name.length - 1];
            let nameParts = name.split(".");
            let fileType = nameParts[nameParts.length - 1];
            var fileToUpload = {
              name: name,
              size: fileInfo.size,
              uri: fileInfo.uri,
              type: "image/" + fileType,
              room_id,
              index,
            };
            networkClient.uploadFile(
              fileToUpload,
              (res) => {
                if (res.is_done) {
                  setStatus(res.response.msg);
                  setUploading(false);
                } else if (res.id == image.length - 1) {
                  setStatus("uploaded");
                } else {
                  setStatus(
                    "Index " +
                      res.index +
                      " Progress : " +
                      res.progress +
                      "% Uploading...."
                  );
                }
              },
              (err) => {
                setUploading(false);
                alert(err);
                console.log("Error", err);
              }
            );
          });
        }
        if (result.status === 404) {
          setUploading(false);
          ToastAndroid.show("Server Error :" + result.error, ToastAndroid.LONG);
        }
      }
    );
  };

  React.useEffect(() => {
    storeManager.getObj("user", (user) => {
      details.user_id = user.id;
    });
  }, []);

  return (
    <Box flex bg={"#fff"} justifyContent="center" alignItems="center">
      <Overlay isVisible={isUploading} />
      <Box w={"100%"} justifyContent="center" alignItems="center">
        <Text text30>Final Step </Text>
        <Text text60T marginT-10 marginB-5>
          Please Select Images For Your Listing{" "}
        </Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {images.length === 0 && (
            <Box m={8} w={"100%"}>
              <Image source={ERROR_IMAGE} style={{ width: 200, height: 200 }} />
              <Text marginV-10>{"No Image (s) Selected"}</Text>
            </Box>
          )}
          {images.map((image, index) => (
            <Box m={4} p={4} position="relative">
              <Box
                position="absolute"
                top={10}
                right={10}
                zIndex={2}
                bg={"#fff"}
                rounded={50}
                p={5}
              >
                <TouchableOpacity
                  onPress={() => {
                    removeImage(image, index);
                  }}
                >
                  <EvilIcons name="trash" size={28} color="red" />
                </TouchableOpacity>
              </Box>
              <Image
                source={{ uri: image.uri }}
                style={{ width: 220, height: 200 }}
              />
            </Box>
          ))}
        </ScrollView>
        {!isUploading && (
          <Button
            onPress={pickImage}
            label="Pick an image from camera roll"
            style={{
              width: "80%",
            }}
            backgroundColor={colors.default.app}
            borderRadius={8}
          />
        )}
      </Box>
      <Text>{status}</Text>
      {!isUploading && (
        <Box
          position="absolute"
          bottom={20}
          w={"100%"}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            label="Publish"
            style={{
              width: "70%",
            }}
            backgroundColor={colors.default.app}
            borderRadius={8}
            onPress={onPublish}
          />
          <Button
            label="Go to home"
            style={{
              width: "50%",
              margin: 10,
            }}
            backgroundColor={"#000"}
            borderRadius={8}
            onPress={() => navigation.replace("HomeScreen")}
          />
        </Box>
      )}
    </Box>
  );
};
