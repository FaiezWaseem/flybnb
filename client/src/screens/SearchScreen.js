import * as React from 'react';
import Box from '../utility/Box';
import { ScrollView } from 'react-native';
import RoomCard from '../components/Search/RoomCard';
import SearchBar from '../components/Search/SearchBar';

import * as networkClient from '../helper/networkClient';
import { type } from '../helper/CONSTANT';

export default ({ navigation }) => {
  const [results, setResults] = React.useState([]);

  const onChangeText = (query = ' ') => {
    if (query.length > 4) {
      networkClient.POST(
        {
          query,
          type: type.SEARCH_LISTING,
        },
        (result) => {
          if (result.status === 200) {
            setResults(result.data);
          }
        }
      );
    }
  };

  return (
    <Box flex bg={'#fff'}>
      <SearchBar onChangeText={onChangeText} />
      <ScrollView>
        {results.map((item) => (
          <RoomCard
            onPress={() =>
              navigation.navigate('RoomScreen', {
                item,
              })
            }
            item={item}
          />
        ))}
      </ScrollView>
    </Box>
  );
};
