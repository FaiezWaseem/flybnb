import * as React from 'react';
import Box from '../utility/Box';
import BottomTabs from '../navigation/HomeNavigation';
export default ({ navigation }) => {
  return (
    <Box flex bg={'#fff'}>
      <BottomTabs extraData={navigation} />
    </Box>
  );
};
