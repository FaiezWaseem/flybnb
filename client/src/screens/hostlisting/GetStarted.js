import * as React from 'react';
import Box from '../../utility/Box';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, Image, Button } from 'react-native-ui-lib';
import { colors } from '../../presets';

const images = [
  require('../../../assets/3d-bedroom-interior-vector.jpg'),
  require('../../../assets/vecteezy_isometric-bedroom-house_11484920.jpg'),
  require('../../../assets/vecteezy_green-door-front-place_11453991.jpg'),
];

export default ({ navigation }) => {
  return (
    <Box flex bg={'#fff'}>
      <Box m={8}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <MaterialIcons name="arrow-back" size={26} color="black" />
        </TouchableOpacity>
      </Box>
      <Box m={10} style={{ marginBottom: 20 }}>
        <Text text30>{"It's Easy To get started on FlyBnB"}</Text>
      </Box>
      <InfoCard
        id={1}
        title={'Tell us about your place'}
        desc={
          'share some basic info,like where it is and how many people can stay '
        }
        icon={images[0]}
      />
      <Box w={'100%'} bg={'rgba(0,0,0,0.1)'} h={1}></Box>
      <InfoCard
        id={2}
        title={'Make it stand out'}
        desc={
          'Add 5 or more photos plus a title and a description--- we will help you out.'
        }
        icon={images[1]}
      />
      <Box w={'100%'} bg={'rgba(0,0,0,0.1)'} h={1}></Box>
      <InfoCard
        id={3}
        title={'Finish up and publish'}
        desc={`Choose if you'd like to start with an experienced guest, set starting a price an publish it. `}
        icon={images[2]}
      />
      <Box w={'100%'} bg={'rgba(0,0,0,0.1)'} h={1}></Box>
      <Box
        w={'100%'}
        justifyContent="center"
        position={'absolute'}
        bottom={10}
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 10,
          paddingBottom: 10,
        }}>
        <Button
          label={'Get Started'}
          size={Button.sizes.large}
          borderRadius={8}
          width={'100%'}
          backgroundColor={colors.default.app}
          onPress={() => {
            navigation.navigate('StepOne');
          }}
        />
      </Box>
    </Box>
  );
};

const InfoCard = ({ id, title, desc, icon }) => {
  return (
    <Box flexDirection="row" p={8} w={'100%'} h={100}>
      <Box w={'10%'} style={{ marginLeft: 6 }}>
        <Text bold>{id}</Text>
      </Box>
      <Box w={'60%'}>
        <Text bold marginB-10>
          {' '}
          {title}
        </Text>
        <Text color={'rgba(0,0,0,0.4)'}>{desc}</Text>
      </Box>
      <Box>
        <Image
          source={icon}
          style={{
            width: 80,
            height: 80,
          }}
        />
      </Box>
    </Box>
  );
};
