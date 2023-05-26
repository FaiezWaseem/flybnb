import * as React from 'react';
import Box from '../../utility/Box';
import { Ionicons } from '@expo/vector-icons';
import { TextField } from 'react-native-ui-lib';
import { colors } from '../../presets';

export default ({onChangeText}) => {
  return (
    <Box
      flexDirection="row"
      justifyContent="space-evenly"
      alignItems="center"
      w={'95%'}
      rounded={50}
      e={4}
      bg={'#FFF'}
      p={12}
      m={8}>
      <Ionicons
        name="search"
        size={24}
        color="black"
        style={{
          marginRight: 10,
        }}
      />
      <TextField
        hint={'Search Any Where'}
        placeholder={'Search Any Where'}
        containerStyle={{
          width: '80%',
        }}
        onChangeText={onChangeText}
      />
      <Box>
        <Ionicons name="options" size={24} color={colors.default.app} />
      </Box>
    </Box>
  );
};
