import React from 'react';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { GOOGLE_MAPS_API_KEY } from '../../helper/CONSTANT';

export default function ({ onSearch }) {
  return (
    <View style={{ marginTop: 0, flexDirection: 'row' }}>
      <GooglePlacesAutocomplete
        nearbyPlacesAPI="GooglePlacesSearch"
        listViewDisplayed="auto"
        debounce={400}
        currentLocation={false}
        minLength={4}
        enablePoweredByContainer={false}
        fetchDetails={true}
        autoFocus={true}
        onFail={(e) => console.log(e)}
        query={{ key: GOOGLE_MAPS_API_KEY }}
        onPress={(data, details = null) => {
          onSearch({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            address: details.formatted_address,
            name: details.name,
            map_url  : details.url
          });
        }}
        placeholder="Search Address"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
            color: '#000',
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            margin: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: 'row',
              marginRight: 8,
              backgroundColor: 'white',
              padding: 9,
              borderRadius: 30,
              alignItems: 'center',
            }}>
            <AntDesign
              name="clockcircle"
              size={12}
              style={{ marginRight: 7 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
