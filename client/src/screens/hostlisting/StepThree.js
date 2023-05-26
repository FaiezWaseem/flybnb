import * as React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import Box from '../../utility/Box';
import {
  Text,
  Picker,
  Colors,
  TextField,
  Button,
  Switch,
  Stepper,
} from 'react-native-ui-lib';
import { ScrollView, ToastAndroid, TouchableOpacity } from 'react-native';
import countries from '../../utility/countries';
import { colors } from '../../presets';
import SearchAddress from '../../components/StepThree/SearchAddress';

export default ({ navigation, ...props }) => {
  const [basicDetail, setBasicDetail] = React.useState({
    title: '',
    summary: ``,
    address: '',
    price: 23.58,
    has_air_cond: false,
    has_tv: false,
    has_kitchen: false,
    total_bathrooms: 2,
    total_bedrooms: 2,
    total_guest: 2,
    total_rooms: 2,
    country: 'PK',
    latitude: 0,
    longitude: 0,
    city: 'Karachi',
    map_url : ""
  });
  const { home_type, room_type } = props.route.params;

  const onNextClicked = () => {
    if (basicDetail.title.length < 30) {
      show('Title Too Short');
      return;
    }
    if (basicDetail.summary.length < 30) {
      show('Summary Too Short');
      return;
    }
    if (basicDetail.address.length < 10) {
      show('Address Too Short');
      return;
    }
    if (basicDetail.price < 0) {
      show('Please Enter Price');
      return;
    }
    if (Object.keys(basicDetail.country).length === 0) {
      show('Please Select Country');
      return;
    }
    basicDetail.home_type = home_type;
    basicDetail.room_type = room_type;

    navigation.navigate('FinalStep', {
      details: basicDetail,
    });
  };
  const show = (msg) => {
    ToastAndroid.show(msg, ToastAndroid.LONG);
  };

  return (
    <Box flex bg={'#fff'}>
      <Box m={8} p={6} flexDirection="row" alignItems="center">
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}>
          <MaterialIcons name="arrow-back" size={26} color="black" />
        </TouchableOpacity>
        <Text bold marginL-10>
          Confirm your address
        </Text>
      </Box>
      <Box p={8} m={8}>
        <SearchAddress
          onSearch={(e) => {
            console.log(e);
            setBasicDetail({
              ...basicDetail,
              latitude: e.latitude,
              longitude: e.longitude,
              address: e.address,
              city: e.name,
              map_url : e.map_url,
            });
          }}
        />
      </Box>
      <ScrollView>
        <Box p={2} m={8}>
          <Picker
            placeholder="Select Your Country"
            floatingPlaceholder
            value={basicDetail.country}
            enableModalBlur={false}
            onChange={(item) =>
              setBasicDetail({ ...basicDetail, country: item })
            }
            topBarProps={{ title: 'Country' }}
            style={{
              color: Colors.red20,
            }}
            showSearch
            searchPlaceholder={'Search a Country'}
            searchStyle={{
              color: Colors.blue30,
              placeholderTextColor: Colors.grey50,
            }}>
            {countries.map((option) => (
              <Picker.Item
                key={option.value}
                value={option.value}
                label={option.label}
                disabled={option.disabled}
              />
            ))}
          </Picker>
        </Box>

        <Box p={8} m={8}>
          <Text text50T>Basic</Text>
        </Box>
        <Box p={8} m={8}>
          <TextField
            placeholder={'Enter Some Title'}
            showCharCounter
            floatingPlaceholder
            value={basicDetail.title}
            onChangeText={(text) =>
              setBasicDetail({ ...basicDetail, title: text })
            }
            maxLength={255}
            fieldStyle={{
              borderBottomColor: 'rgba(0,0,0,0.1)',
              borderBottomWidth: 1,
              marginTop: 2,
            }}
          />
        </Box>
        <Box p={8} m={8}>
          <TextField
            placeholder={'Enter Some Detail'}
            showCharCounter
            maxLength={500}
            floatingPlaceholder
            value={basicDetail.summary}
            onChangeText={(text) =>
              setBasicDetail({ ...basicDetail, summary: text })
            }
            fieldStyle={{
              borderBottomColor: 'rgba(0,0,0,0.1)',
              borderBottomWidth: 1,
              marginTop: 2,
            }}
          />
        </Box>

        <Box
          w={'100%'}
          h={1}
          bg={'rgba(0,0,0,0.1)'}
          style={{
            marginTop: 20,
            marginBottom: 20,
          }}></Box>
        <Box p={8} m={8}>
          <Text text60T>Place Info</Text>
        </Box>

        <Box p={8}>
          <TextField
            placeholder={'Enter Charge per night in USD'}
            value={basicDetail.price}
            onChangeText={(text) =>
              setBasicDetail({ ...basicDetail, price: parseFloat(text) })
            }
          />
        </Box>
        <Box p={8} flexDirection="row" justifyContent="space-between">
          <Text>Guests </Text>
          <Stepper
            minValue={1}
            maxValue={20}
            onValueChange={(number) =>
              setBasicDetail({ ...basicDetail, total_guest: parseInt(number) })
            }
          />
        </Box>
        <Box p={8} flexDirection="row" justifyContent="space-between">
          <Text>Beds </Text>
          <Stepper
            minValue={1}
            maxValue={20}
            onValueChange={(number) =>
              setBasicDetail({
                ...basicDetail,
                total_bedrooms: parseInt(number),
              })
            }
          />
        </Box>
        <Box p={8} flexDirection="row" justifyContent="space-between">
          <Text>Rooms</Text>
          <Stepper
            minValue={1}
            maxValue={20}
            onValueChange={(number) =>
              setBasicDetail({
                ...basicDetail,
                total_rooms: parseInt(number),
              })
            }
          />
        </Box>
        <Box p={8} flexDirection="row" justifyContent="space-between">
          <Text>BathRooms</Text>
          <Stepper
            minValue={1}
            maxValue={20}
            onValueChange={(number) =>
              setBasicDetail({
                ...basicDetail,
                total_bathrooms: parseInt(number),
              })
            }
          />
        </Box>
        <Box p={8} flexDirection="row" justifyContent="space-between">
          <Text>Has TV </Text>
          <Switch
            value={basicDetail?.has_tv}
            onValueChange={() =>
              setBasicDetail({
                ...basicDetail,
                has_tv: !basicDetail?.has_tv,
              })
            }
          />
        </Box>
        <Box p={8} flexDirection="row" justifyContent="space-between">
          <Text>Has Kitchen </Text>
          <Switch
            value={basicDetail?.has_kitchen}
            onValueChange={() =>
              setBasicDetail({
                ...basicDetail,
                has_kitchen: !basicDetail?.has_kitchen,
              })
            }
          />
        </Box>
        <Box p={8} flexDirection="row" justifyContent="space-between">
          <Text>Has Air Conditionar </Text>
          <Switch
            value={basicDetail?.has_air_cond}
            onValueChange={() =>
              setBasicDetail({
                ...basicDetail,
                has_air_cond: !basicDetail?.has_air_cond,
              })
            }
          />
        </Box>

        <Box flexDirection="row" p={8} e={3} m={4}>
          <Box w={'70%'} justifyContent="center">
            <TouchableOpacity onPress={()=> navigation.pop()}>
              <Text bold underline text60>
                Back
              </Text>
            </TouchableOpacity>
          </Box>
          <Box w={'30%'} justifyContent="center" alignItems="center">
            <Button
              label={'Next'}
              size={Button.sizes.large}
              borderRadius={4}
              width={'100%'}
              backgroundColor={colors.default.app}
              onPress={onNextClicked}
            />
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};
