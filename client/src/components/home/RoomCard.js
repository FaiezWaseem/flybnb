import * as React from 'react';
import Box from '../../utility/Box';
import { Ionicons } from '@expo/vector-icons';
import { Image, Text, Carousel } from 'react-native-ui-lib';
import { width, height } from '../../presets';
import { Pressable, TouchableOpacity } from 'react-native';
import { BACKEND_URL, type } from '../../helper/CONSTANT';
import * as storeManager from '../../helper/sharedPrefrences';
import * as networkClient from '../../helper/networkClient';
const user =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRKouGaC5wkHjgKIuSSZTrTBBQWc5gEIOPFw&usqp=CAU';

export default ({ onPress, item }) => {
  return (
    <Box style={{ marginTop: 6, marginBottom: 6 }}>
      <Box rounded={4} position="relative" w={width('90')}>
        <Carousel showCounter autoplay autoplayInterval={4000}>
          {item.images.map((i) => (
            <Image
              source={{
                uri: BACKEND_URL + 'uploads/' + i.file_name,
              }}
              style={{
                width: width('90'),
                height: height('26'),
                borderRadius: 8,
              }}
            />
          ))}
        </Carousel>

        <Box position="absolute" bottom={10} right={10}>
          <TouchableOpacity
            onPress={() => {
              storeManager.getObj('user', (user) => {
                networkClient.POST(
                  {
                    type: type.ADD_FAVOURITE,
                    room_id: item.room_id,
                    user_id: user.id,
                  },
                  (response) => {
                    console.log(response);
                    alert(
                      response.status === 200
                        ? 'ADDED TO FAVORITE'
                        : 'ALREADY ADDED TO FAVORITE'
                    );
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
              width: 60,
              height: 60,
              borderRadius: 8,
            }}
          />
        </Box>
      </Box>
      <Pressable onPress={onPress}>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          style={{ marginTop: 10 }}>
          <Text>
            {item.city},{item.country}
          </Text>
          <Box flexDirection="row" justifyContent="center" alignItems="center">
            <Ionicons name="md-star" size={18} color="black" />
            <Text marginL-5>4.66</Text>
          </Box>
        </Box>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          style={{ marginTop: 5 }}>
          <Text grey>{item.title}</Text>
        </Box>
        <Box flexDirection="row" justifyContent="space-between">
          <Text underline>${item.price} before taxes</Text>
        </Box>
      </Pressable>
    </Box>
  );
};
