import * as React from 'react';
import Box from '../../utility/Box';
import { Card, Text, Button } from 'react-native-ui-lib';
import { TouchableOpacity } from 'react-native';
import { colors } from '../../presets';
import { ROOM_TYPES } from '../../helper/CONSTANT';
const category = [
  {
    title: 'Rooms',
    icon: 'https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg',
    type: ROOM_TYPES.SINGLE,
  },
  {
    title: 'Towers',
    icon: 'https://a0.muscache.com/pictures/d721318f-4752-417d-b4fa-77da3cbc3269.jpg',
  },
  {
    title: 'Island',
    icon: 'https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg',
  },
  {
    title: 'Tiny Homes',
    icon: 'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg',
    type: ROOM_TYPES.ENTIRE,
  },
  {
    title: 'Containers',
    icon: 'https://a0.muscache.com/pictures/0ff9740e-52a2-4cd5-ae5a-94e1bfb560d6.jpg',
    type: ROOM_TYPES.SHARED,
  },
  {
    title: 'Designs',
    icon: 'https://a0.muscache.com/pictures/f60700bc-8ab5-424c-912b-6ef17abc479a.jpg',
  },
  {
    title: 'View',
    icon: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
  },
];

export default ({ navigation, ...props }) => {
  const [selected, setSelected] = React.useState({});
  const { home_type } = props.route.params;
  const onNextClicked = () => {
    const key = Object.keys(selected)[0];
    if (key) {
      navigation.navigate('StepThree', {
        home_type: home_type.type,
        room_type: category[key].type,
      });
    } else {
      alert('Please Select One');
    }
  };
  return (
    <Box flex bg={'#fff'}>
      <Box m={8} style={{ marginTop: 20 }}>
        <Text text40>Which type of place will guest have?</Text>
      </Box>

      <Box
        flexDirection="row"
        m={8}
        justifyContent="center"
        alignItems="center">
        <Card
          height={100}
          flex
          row
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: selected['3'] ? 'red' : 'rgba(0,0,0,0.2)',
            borderWidth: selected['3'] ? 3 : 1,
          }}
          onPress={() => setSelected({ 3: !selected['3'] })}
          activeOpacity={1}>
          <Box w={'70%'}>
            <Text bold>{'An Entire Place'}</Text>
            <Text>{'Guests have whole place to themselves.'}</Text>
          </Box>
          <Card.Section
            imageSource={{
              uri: category[3].icon,
            }}
            imageStyle={{ height: 40, width: 40 }}
          />
        </Card>
      </Box>
      <Box
        flexDirection="row"
        m={8}
        justifyContent="center"
        alignItems="center">
        <Card
          height={100}
          flex
          row
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: selected['0'] ? 'red' : 'rgba(0,0,0,0.2)',
            borderWidth: selected['0'] ? 3 : 1,
          }}
          onPress={() => setSelected({ 0: !selected['0'] })}
          activeOpacity={1}>
          <Box w={'70%'}>
            <Text bold>{'A Room'}</Text>
            <Text>
              {
                'Guests have their own room in a home, plus access to shared spaces.'
              }
            </Text>
          </Box>
          <Card.Section
            imageSource={{
              uri: category[0].icon,
            }}
            imageStyle={{ height: 40, width: 40 }}
          />
        </Card>
      </Box>
      <Box
        flexDirection="row"
        m={8}
        justifyContent="center"
        alignItems="center">
        <Card
          height={100}
          flex
          row
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: selected['4'] ? 'red' : 'rgba(0,0,0,0.2)',
            borderWidth: selected['4'] ? 3 : 1,
          }}
          onPress={() => setSelected({ 4: !selected['4'] })}
          activeOpacity={1}>
          <Box w={'70%'}>
            <Text bold>{'A shared room'}</Text>
            <Text>
              {
                'Guests sleep in a room or a common area that may be shared with you or others.'
              }
            </Text>
          </Box>
          <Card.Section
            imageSource={{
              uri: category[4].icon,
            }}
            imageStyle={{ height: 40, width: 40 }}
          />
        </Card>
      </Box>

      <Box
        flexDirection="row"
        p={8}
        e={3}
        position="absolute"
        zIndex={2}
        bottom={0}>
        <Box w={'70%'} justifyContent="center">
          <TouchableOpacity onPress={() => navigation.pop()}>
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
    </Box>
  );
};
