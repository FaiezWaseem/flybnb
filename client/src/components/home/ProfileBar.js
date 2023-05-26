import * as React from 'react';
import Box from '../../utility/Box';
import { Text, Image, TouchableOpacity } from 'react-native-ui-lib';
import { MaterialIcons } from '@expo/vector-icons';

import * as storeManager from "../../helper/sharedPrefrences"

const USER_ICON  =  require("../../../assets/usericon.jpg")

export default ({onPress}) => {
  const [user , setUser] = React.useState({
    name : "No Name Found"
  })
  React.useEffect(()=>{
   storeManager.getObj("user" , (result)=> {
     if(result){ setUser(result)}
   })
  },[])
  return (
    <TouchableOpacity onPress={onPress} >
      <Box flexDirection="row">
        <Box>
          <Image
            source={USER_ICON}
            style={{
              width: 60,
              height: 60,
            }}
          />
        </Box>
        <Box justifyContent="center" w={'70%'}>
          <Text>{user?.name}</Text>
          <Text grey>Show Profile</Text>
        </Box>
        <Box justifyContent="center">
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </Box>
      </Box>
      <Box bg={'grey'} w={'90%'} h={0.5} style={{ marginLeft: 15 }}></Box>
    </TouchableOpacity>
  );
};
