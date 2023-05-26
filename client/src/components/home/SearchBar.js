import * as React from 'react';
import Box from '../../utility/Box';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native-ui-lib';
import { colors } from '../../presets';
import { Pressable } from 'react-native';

export default ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Box
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="center"
        w={'90%'}
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
        <Box w={'80%'}>
          <Text color={'rgba(0,0,0,0.5)'}>{'Search Any Where'}</Text>
        </Box>
        <Box>
          <Ionicons name="options" size={24} color={colors.default.app} />
        </Box>
      </Box>
    </Pressable>
  );
};
