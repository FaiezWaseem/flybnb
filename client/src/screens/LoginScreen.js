import * as React from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

import { View, Text, Button, TextField, Image } from 'react-native-ui-lib';
import { colors } from '../presets';
import * as networkClient from '../helper/networkClient';
import { type } from '../helper/CONSTANT';
import * as storeManager from '../helper/sharedPrefrences';

const bg = require('../../assets/logo.png');
export default ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isloading, setloading] = React.useState(false);
 


  const OnSigninClicked = () => {
   
    setloading(true);
    if (email.length > 10 && password.length > 5) {
      networkClient.POST(
        {
          email,
          password,
          type: type.SIGNIN_USER,
        },
        (result) => {
          if (result.status === 200) {
            if (result.data) {
              storeManager.storeObj('user', result.data);
              navigation.replace('HomeScreen');
            } else {
              console.log(result);
              ToastAndroid.show('Failed To SignIn ', ToastAndroid.LONG);
            }
          } else {
            console.log(result);
            ToastAndroid.show('Failed To SignIn ', ToastAndroid.LONG);
          }
          setloading(false);
        }
      );
    } else {
      ToastAndroid.show('Please Fill Out All Fields ', ToastAndroid.LONG);
      setloading(false);
    }
  };

  return (
    <View center bg-bg flex>
      <Image source={bg} />
      <Text grey>signin to continue</Text>
      {isloading && (
        <ActivityIndicator size="small" color={colors.default.app} />
      )}
      <View
        style={{
          marginTop: '10%',
          width: '80%',
        }}>
        <TextField
          placeholder={'Username'}
          floatingPlaceholder
          hint={'Enter your Username or Email'}
          onChangeText={(val) => setEmail(val)}
          enableErrors
        />
        <TextField
          placeholder={'Password'}
          floatingPlaceholder
          secureTextEntry={true}
          onChangeText={(val) => setPassword(val)}
        />
      </View>
      <View marginT-10 width={'80%'}>
        <Button
          label={'SignIn'}
          size={Button.sizes.large}
          borderRadius={8}
          width={'100%'}
          backgroundColor={colors.default.app}
          onPress={OnSigninClicked}
        />
      </View>
      <Text marginT-20>
        {"Don't Have an Account"}{' '}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RegisterScreen');
          }}>
          <Text color={colors.default.app}>{'Register now!'}</Text>
        </TouchableOpacity>{' '}
      </Text>
    </View>
  );
};
