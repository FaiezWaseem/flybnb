import * as React from 'react';
import Box from '../../utility/Box';
import RoomCard from '../../components/home/RoomCard';
import { FlatList } from 'react-native';
import { Text } from 'react-native-ui-lib';

import * as networkClient from '../../helper/networkClient';
import { type } from '../../helper/CONSTANT';
import * as storeManager from '../../helper/sharedPrefrences';

export default ({ extraData }) => {
  const [mylisting, setmyListing] = React.useState([]);
  const [isRefreshing, setRefreshing] = React.useState(false);
  const navigation = extraData;

  React.useEffect(() => {
    load();
  }, []);
  const load = () => {
    storeManager.getObj('user', (user) => {
      if (user) {
        networkClient.POST(
          {
            type: type.GET_LISTING,
            id: user.id,
          },
          (result) => {
            console.log(result);
            if (result.status === 200) {
              setmyListing(result.data);
            }
          }
        );
      }
    });
  };
  return (
    <Box flex bg={'#fff'} alignItems="center">
      <Box
        flexDirection="row"
        justifyContent="space-between"
        w={'100%'}
        alignItems="center"
        style={{
          marginTop: 20,
        }}
        h={90}>
        <Text text40 margin-10 marginL-20>
          MyListing
        </Text>
        <Text underline margin-10>
          Edit
        </Text>
      </Box>
      <FlatList
        data={mylisting}
        renderItem={({ item }) => (
          <RoomCard
            item={item}
            onPress={() => {
              navigation.navigate('RoomScreen', {
                item,
              });
            }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        refreshing={isRefreshing}
        onRefresh={() => {
          load();
        }}
        ListEmptyComponent={
          <Box m={20}>
            <Text text60>Create Your first Listing</Text>
            <Text grey>
              Go To Account Tab from Bottom right click on List your space
            </Text>
          </Box>
        }
      />
    </Box>
  );
};
