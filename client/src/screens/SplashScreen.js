import * as React from 'react';
import Box from '../utility/Box';
import { Image, Text } from 'react-native-ui-lib';
import { ActivityIndicator } from 'react-native';
import * as storeManager from '../helper/sharedPrefrences';

const bg = require('../../assets/logo.png');
export default ({ navigation }) => {
  React.useEffect(() => {
    storeManager.getObj('user', (user) => {
      console.log(user);
      if (user) {
        setTimeout(() => {
          navigation.replace('HomeScreen');
        }, 1000);
      } else {
        setTimeout(() => {
          navigation.replace('LoginScreen');
        }, 2000);
      }
    });
  }, []);
  return (
    <Box flex bg={'#fff'} justifyContent="center" alignItems="center">
      <Image source={bg} />
      <Text grey marginT-10 marginB-10>
        Find the Best Rooms for Stay
      </Text>
      <ActivityIndicator style={{ marginTop: 8 }} color={'#ff4040'} />
    </Box>
  );
};
