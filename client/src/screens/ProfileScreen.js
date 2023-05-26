import * as React from 'react';
import Box from '../utility/Box';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Text, Image, TextField, Button } from 'react-native-ui-lib';
import { colors } from '../presets';
import { TouchableOpacity, ToastAndroid } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as storeManager from '../helper/sharedPrefrences';
import * as networkClient from '../helper/networkClient';
import { getFileInfo, isLessThanTheMB } from './hostlisting/FinalStep';
import { BACKEND_URL } from '../helper/CONSTANT';
import Overlay from '../components/Overlay';

const icon = require('../../assets/user.png');

export default ({ navigation }) => {
  const [image, setImage] = React.useState(null);
  const [isVisible, setVisible] = React.useState(false);
  const [user, setUser] = React.useState({
    name: 'No Name Found',
    description: '',
  });
  React.useEffect(() => {
    storeManager.getObj('user', (result) => {
      if (result) {
        setUser(result);
      }
    });
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result);
    }
  };
  const onUpdated = async () => {
    if (image) {
      setVisible(true);
      const fileInfo = await getFileInfo(image.uri);
      let name = fileInfo.uri.split('/');
      name = name[name.length - 1];
      let nameParts = name.split('.');
      let fileType = nameParts[nameParts.length - 1];
      var fileToUpload = {
        name: name,
        size: fileInfo.size,
        uri: fileInfo.uri,
        type: 'image/' + fileType,
        user_id: user.id,
        username: user.name,
        user_desc: user.description,
      };
      networkClient.uploadprofile(
        fileToUpload,
        (res) => {
          console.log(res);
          if (res.is_done) {
            user.profile_image = res.response.file_name;
            storeManager.storeObj('user', user);
            ToastAndroid.show('Profile Updated', ToastAndroid.LONG);
            setVisible(false);
          }
        },
        (err) => console.log('Error', err)
      );
    }else{
      ToastAndroid.show('No PRofile Image Selected!', ToastAndroid.LONG);
    }
  };

  return (
    <Box flex bg={'#fff'}>
      <Overlay isVisible={isVisible} />
      <Box
        m={8}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(0,0,0,0.2)',
          paddingVertical: 8,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}>
          <MaterialIcons name="arrow-back" size={26} color="black" />
        </TouchableOpacity>
        <Text bold marginL-10 text60H>
          Edit Profile
        </Text>
      </Box>
      <Box justifyContent="center" alignItems="center" position="relative">
        <Image
          source={
            image
              ? { uri: image.uri }
              : user.profile_image
              ? { uri: BACKEND_URL + 'uploads/' + user.profile_image }
              : icon
          }
          style={{ width: 200, height: 200, borderRadius: 50 }}
        />
        <TouchableOpacity onPress={pickImage}>
          <Box
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            e={5}
            rounded={50}
            p={4}
            bg={'#fff'}
            position="absolute"
            bottom={-10}>
            <Entypo name="camera" size={24} color="black" />
            <Text marginL-10 marginR-5>
              Add
            </Text>
          </Box>
        </TouchableOpacity>
      </Box>
      <Box p={8} m={8}>
        <TextField
          placeholder={'Username'}
          value={user.name}
          onChangeText={(text) => setUser({ ...user, name: text })}
          showCharCounter
          floatingPlaceholder
          maxLength={255}
          fieldStyle={{
            borderBottomColor: 'rgba(0,0,0,0.1)',
            borderBottomWidth: 1,
            marginTop: 2,
          }}
        />
      </Box>
      <Box p={8} m={8}>
        <TextField
          placeholder={'Write Something about yourself'}
          showCharCounter
          floatingPlaceholder
          value={user.description}
          onChangeText={(text) => setUser({ ...user, description: text })}
          maxLength={300}
          fieldStyle={{
            borderBottomColor: 'rgba(0,0,0,0.1)',
            borderBottomWidth: 1,
            marginTop: 2,
          }}
        />
      </Box>
      <Box
        position="absolute"
        bottom={10}
        w={'100%'}
        justifyContent="center"
        alignItems="center">
        <Button
          label={'Update'}
          borderRadius={4}
          style={{
            width: '80%',
          }}
          backgroundColor={colors.default.app}
          onPress={onUpdated}
        />
      </Box>
    </Box>
  );
};
