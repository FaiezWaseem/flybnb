import * as React from "react";
import Box from "../utility/Box";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Carousel,
  Image,
  Text,
  TouchableOpacity,
  Button,
} from "react-native-ui-lib";
import { ScrollView } from "react-native";
import { WebView } from "react-native-webview";
import { width, height, colors } from "../presets";
import { BACKEND_URL, type } from "../helper/CONSTANT";
import * as storeManager from "../helper/sharedPrefrences";
import * as networkClient from "../helper/networkClient";

const user = require("../../assets/default_user.jpg");

export default ({ ...props }) => {
  const { item } = props.route.params;
  const reviews = Math.floor(Math.random() * 200) + 1;
  const years_hosting = Math.floor(Math.random() * 7) + 1;

  const onReserve = () => {
    storeManager.getObj("user", (user) => {
      networkClient.POST(
        {
          type: type.RESERVE_ROOM,
          room_id: item.room_id,
          room_creator_id: item.user_id,
          user_id: user.id,
        },
        (response) => {
          if (response.status) {
            alert("ROOM BOOKING REQUEST SENDED");
          } else {
            alert("Failed To Reserve a Room");
          }
        }
      );
    });
  };

  return (
    <Box flex bg={"#fff"}>
      <ScrollView>
        {/* IMAGE SECTION */}
        <Box position="relative">
          <Carousel
            onChangePage={() => console.log("page changed")}
            showCounter
            autoplay
            autoplayInterval={4000}
          >
            {item.images.map((i) => (
              <Image
                source={{
                  uri: BACKEND_URL + "uploads/" + i.file_name,
                }}
                style={{
                  width: width("100"),
                  height: height("30"),
                }}
              />
            ))}
          </Carousel>
          <Box position="absolute" top={10} left={8}>
            <Box bg={"#fff"} rounded={20} e={3} p={2}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.pop();
                }}
              >
                <MaterialIcons name="arrow-back" size={26} color="black" />
              </TouchableOpacity>
            </Box>
          </Box>
        </Box>

        {/* TITLE */}
        <Box m={8} p={3}>
          <Text text50>{item.title}</Text>
        </Box>
        <Box m={8} p={3} flexDirection="row" alignItems="center">
          <MaterialIcons name="star" size={24} color="black" />
          <Text>{"4.68  *"}</Text>
          <Text underline marginL-10 bold>
            {" "}
            {reviews + "reviews"}
          </Text>
          <Text>{"  *  "}</Text>
          <Text>
            {item.city},{item.country}
          </Text>
        </Box>
        <Box bg={"grey"} w={"99%"} h={0.5} m={2}></Box>
        <Item
          title="48hours cancellation protection"
          desc="You can Cancel 48hours before with no penalty fee"
          icon="calendar-today"
        />

        {/* ABOUT HOST */}
        <Box
          bg={"rgba(239, 239, 240,1)"}
          h={350}
          p={8}
          justifyContent="center"
          alignItems="center"
        >
          <Box w={"100%"} m={12} style={{ marginBottom: 20 }}>
            <Text text50 marginL-15>
              Meet Your Host
            </Text>
          </Box>
          <Box
            w={"90%"}
            bg={"#fff"}
            e={3}
            h={200}
            rounded={8}
            flexDirection="row"
          >
            <Box
              justifyContent="center"
              alignItems="center"
              w={"50%"}
              h={"100%"}
            >
              <Image
                source={
                  item.profile_image
                    ? {
                        uri: BACKEND_URL + "uploads/" + item.profile_image,
                      }
                    : user
                }
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
              <Text text60 marginT-10>
                {item.user_name}
              </Text>
            </Box>
            <Box w={"50%"} h={"100%"} alignItems="center">
              <Box h={"33%"} justifyContent="center" alignItems="center">
                <Text bold text40>
                  {reviews}
                </Text>
                <Text>reviews</Text>
              </Box>
              <Box h={"33%"} justifyContent="center" alignItems="center">
                <Text bold text40>
                  {"4.46"}
                </Text>
                <Text>rating</Text>
              </Box>
              <Box h={"33%"} justifyContent="center" alignItems="center">
                <Text bold text40>
                  {years_hosting}
                </Text>
                <Text>year hosting</Text>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* PLACE DESCRIPTION */}
        <Box p={10} style={{ marginTop: 10 }}>
          <Text text60>About this place</Text>
          <Text
            marginT-10
            marginB-10
            color={"rgba(0,0,0,0.5)"}
            style={{
              textAlign: "justify",
              lineHeight: 20,
            }}
          >
            {item.summary}
          </Text>
        </Box>
        <Box justifyContent="space-evenly" p={8}>
          <Text>
            <Text bold>ROOM TYPE</Text> : {item.room_type}
          </Text>
          <Text>
            <Text bold>PLACE</Text> : {item.home_type}
          </Text>
          <Text>
            <Text bold>Address</Text> : {item.address}
          </Text>
        </Box>
        <Box flexDirection={"row"} m={8} justifyContent="space-evenly">
          <BoxItem title="Guests" desc={item.total_guest} />
          <BoxItem title="Rooms" desc={item.total_rooms} />
          <BoxItem title="Beds" desc={item.total_bedrooms} />
        </Box>
        <Box flexDirection={"row"} m={8} justifyContent="space-evenly">
          <BoxItem title="BathRoom" desc={item.total_bathrooms} />
          <BoxItem title="Has Tv" desc={item.has_tv == 0 ? "NO" : "YES"} />
          <BoxItem
            title="Has kitchen"
            desc={item.has_kitchen == 0 ? "NO" : "YES"}
          />
        </Box>
      </ScrollView>

      <Box flexDirection="row" p={8} e={3}>
        <Box w={"60%"}>
          <Text bold>${item.price}</Text>
          <Text underline>total before taxes</Text>
          <Text bold underline>
            Sep20 - Sep25
          </Text>
        </Box>
        <Box w={"40%"} justifyContent="center" alignItems="center">
          <Button
            label={"reserve"}
            size={Button.sizes.large}
            borderRadius={8}
            width={"100%"}
            backgroundColor={colors.default.app}
            onPress={onReserve}
          />
        </Box>
      </Box>
    </Box>
  );
};

const BoxItem = ({ title, desc }) => {
  return (
    <Box
      w={"30%"}
      h={100}
      rounded={12}
      p={12}
      style={{
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.4)",
      }}
      justifyContent="center"
    >
      <Image
        source={{
          uri: "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
        }}
        style={{ width: 30, height: 30 }}
      />
      <Text bold>{title}</Text>
      <Text color="rgba(0,0,0,0.5)">{desc}</Text>
    </Box>
  );
};

const Item = ({ title, desc, icon }) => {
  return (
    <TouchableOpacity>
      <Box
        flexDirection="row"
        w={"100%"}
        style={{ marginTop: 10, marginBottom: 10 }}
      >
        <Box justifyContent="center" w={"20%"} alignItems="center">
          <MaterialIcons name={icon} size={24} color="black" />
        </Box>
        <Box w={"60%"} justifyContent="center">
          <Text bold>{title}</Text>
          <Text color="rgba(0,0,0,0.5)">{desc}</Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};
