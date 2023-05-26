import * as React from 'react';
import Box from '../../utility/Box';
import { Ionicons } from '@expo/vector-icons';
import { Image, Text, Carousel } from 'react-native-ui-lib';
import { width, height } from '../../presets';
import { Pressable , TouchableOpacity } from 'react-native';
import { BACKEND_URL } from '../../helper/CONSTANT';
import * as storeManager from "../../helper/sharedPrefrences"
import * as networkClient from "../../helper/networkClient"

const user =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRKouGaC5wkHjgKIuSSZTrTBBQWc5gEIOPFw&usqp=CAU';

export default ({ onPress, item }) => {
  return (
    <Box style={{ marginTop: 6, marginBottom: 6 }} flexDirection="row">
      <Box
        rounded={4}
        style={{ marginLeft: 5, marginRight: 10 }}
        position="relative"
        w={width('50')}>
        <Carousel showCounter>
          {item.images.map((i) => (
            <Image
              source={{
                uri: BACKEND_URL + 'uploads/' + i.file_name,
              }}
              style={{
                width: width('50'),
                height: height('15'),
                borderRadius: 2,
              }}
            />
          ))}
        </Carousel>

        <Box position="absolute" bottom={10} right={10}>
        <TouchableOpacity onPress={()=>{
          console.log("fav")
            storeManager.getObj('user', (user) => {
                networkClient.POST(
                  {
                    type: type.ADD_FAVOURITE,
                    room_id: item.room_id,
                    user_id: user.id,
                  },
                  (response) => {
                    console.log(response);
                    alert(response.status === 200 ? 'ADDED TO FAVOURITE' : 'FAILED');
                  }
                );
              });
        }}>
          <Ionicons name="heart-outline" size={24} color="white" />
        </TouchableOpacity>
        </Box>
        <Box position="absolute" bottom={10} left={10}>
          <Image
            source={{
              uri: item.profile_image
                ? BACKEND_URL + 'uploads/' + item.profile_image
                : user,
            }}
            style={{
              width: 30,
              height: 30,
              borderRadius: 4,
            }}
          />
        </Box>
      </Box>
      <Pressable onPress={onPress}>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          style={{ marginTop: 10 }}
          w={width('45')}>
          <Text>
            {item.city}, {item.country}
          </Text>
          <Box flexDirection="row" justifyContent="center" alignItems="center">
            <Ionicons name="md-star" size={18} color="black" />
            <Text marginL-5>4.66</Text>
          </Box>
        </Box>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          style={{ marginTop: 5 }}
          w={width('45')}>
          <Text grey>{item.title}</Text>
        </Box>
        <Box flexDirection="row" justifyContent="space-between">
          <Text underline>${item.price} before taxes</Text>
        </Box>
      </Pressable>
    </Box>
  );
};
