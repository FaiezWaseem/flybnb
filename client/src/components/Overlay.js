import * as React from 'react';
import Box from '../utility/Box';
import { ActivityIndicator } from 'react-native';

export default ({ isVisible }) => {
  if (isVisible) {
    return (
      <Box
        flex
        justifyContent="center"
        alignItems="center"
        bg={'rgba(0,0,0,0.3)'}
        position="absolute"
        zIndex={999}
        w={'100%'}
        h={'100%'}>
        <ActivityIndicator size={32} />
      </Box>
    );
  } else {
    return <></>;
  }
};
