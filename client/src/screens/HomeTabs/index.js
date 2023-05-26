import * as React from 'react';
import Box from '../../utility/Box';
import SearchBar from '../../components/home/SearchBar';
import RoomCard from '../../components/home/RoomCard';
import Category from '../../components/home/Category';
import { FlatList } from 'react-native';
import * as networkClient from '../../helper/networkClient';
import { type } from '../../helper/CONSTANT';
import { Text } from 'react-native-ui-lib';

export default ({ extraData }) => {
  const navigation = extraData;
  const [listings, setListings] = React.useState([]);
  React.useEffect(() => {
    networkClient.POST({ type: type.GET_LISTING }, (result) => {
      console.log(result);
      if (result.status === 200) {
        setListings(result.data);
      }
    });
  }, []);

  return (
    <Box flex bg={'#fff'} alignItems="center">
      <SearchBar
        onPress={() => {
          navigation.navigate('SearchScreen');
        }}
      />
      <Category
        onPress={(category) => {
          networkClient.POST(
            { type: type.SEARCH_LISTING, query: category.type },
            (result) => {
              console.log(result);
              if (result.status === 200) {
                setListings(result.data);
              }
            }
          );
        }}
      />
      <FlatList
        data={listings}
        renderItem={({ item }) => (
          <RoomCard
            onPress={() => {
              navigation.navigate('RoomScreen', {
                item,
              });
            }}
            item={item}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Box>
            <Text>No Result Found</Text>
          </Box>
        }
      />
    </Box>
  );
};
