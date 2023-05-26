import * as React from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import { View, Text, Button, TextField, Image } from 'react-native-ui-lib';
import { colors } from '../presets';

import * as networkClient from '../helper/networkClient';
import { type  } from '../helper/CONSTANT';
import * as storeManager from '../helper/sharedPrefrences';

const bg = require('../../assets/logo.png');
export default ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isloading, setloading] = React.useState(false);

  const OnRegisterClicked = () => {
    setloading(true);
    if (username.length > 6 && email.length > 10 && password.length > 5) {
      networkClient.POST(
        { username, email, password, type: type.REGISTER_USER },
        (result) => {
          if (result.status === 200) {
            if (result.data) {
              ToastAndroid.show('Account Created , Login To Continue... ', ToastAndroid.LONG);
              navigation.pop();
            } else {
              console.log(result);
              ToastAndroid.show('Failed To Register ', ToastAndroid.LONG);
            }
          } else {
            console.log(result);
            ToastAndroid.show('Failed To Register ', ToastAndroid.LONG);
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
      <Text grey>Register to continue</Text>
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
          onChangeText={(val) => setUsername(val)}
        />
        <TextField
          placeholder={'Email'}
          floatingPlaceholder
          onChangeText={(val) => setEmail(val)}
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
          label={'Register'}
          size={Button.sizes.large}
          borderRadius={8}
          width={'100%'}
          backgroundColor={colors.default.app}
          onPress={OnRegisterClicked}
        />
      </View>
      <Text marginT-20>
        {'Already Have an Account'}{' '}
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}>
          <Text color={colors.default.app}>{'SignIn!'}</Text>
        </TouchableOpacity>{' '}
      </Text>
    </View>
  );
};
