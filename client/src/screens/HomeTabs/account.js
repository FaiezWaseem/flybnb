import * as React from 'react';
import Box from '../../utility/Box';
import { Text, Image, TouchableOpacity } from 'react-native-ui-lib';
import { MaterialIcons } from '@expo/vector-icons';
import ProfileBar from '../../components/home/ProfileBar';
import * as storeManager from '../../helper/sharedPrefrences';

export default ({ extraData }) => {
  const navigation = extraData;
  return (
    <Box flex bg={'#fff'}>
      <Box
        w={'100%'}
        style={{ marginLeft: 15, marginTop: 30, marginBottom: 20 }}>
        <Text text30>Profile</Text>
      </Box>
      <ProfileBar onPress={() => extraData.navigate('ProfileScreen')} />
      <Box
        w={'100%'}
        style={{ marginLeft: 15, marginTop: 30, marginBottom: 20 }}>
        <Text text50>Setting</Text>
      </Box>
      <Item title={'Personal Information'} icon={'supervised-user-circle'} />
      <Item title={'Translations'} icon={'g-translate'} />
      <Item title={'Taxes'} icon={'insert-drive-file'} />
      <Box
        w={'100%'}
        style={{ marginLeft: 15, marginTop: 30, marginBottom: 20 }}>
        <Text text50>Hosting</Text>
      </Box>
      <Item
        title={'List Your Space'}
        icon={'house-siding'}
        onPress={() => {
          navigation.navigate('GetStarted');
        }}
      />
      <Item title={'Learn About Hosting'} icon={'house'} />
      <TouchableOpacity
        onPress={() => {
          storeManager.removeValue('user');
          navigation.replace('SplashScreen');
        }}>
        <Box
          w={'100%'}
          style={{ marginLeft: 15, marginTop: 30, marginBottom: 20 }}>
          <Text underline text60>
            Logout
          </Text>
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

const Item = ({ title, icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box flexDirection="row" w={'100%'} style={{ marginTop: 10 }}>
        <Box justifyContent="center" w={'20%'} alignItems="center">
          <MaterialIcons name={icon} size={24} color="black" />
        </Box>
        <Box w={'60%'} justifyContent="center">
          <Text>{title}</Text>
        </Box>
        <Box justifyContent="center" alignItems="center" w={'20%'}>
          <MaterialIcons name="keyboard-arrow-right" size={22} color="black" />
        </Box>
      </Box>
      <Box
        bg={'grey'}
        w={'90%'}
        h={0.5}
        style={{ marginLeft: 15, marginTop: 10 }}></Box>
    </TouchableOpacity>
  );
};
