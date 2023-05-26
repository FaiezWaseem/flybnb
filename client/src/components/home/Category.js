import * as React from 'react';
import Box from '../../utility/Box';
import { ScrollView } from 'react-native';
import { Text, Image , TouchableOpacity  } from 'react-native-ui-lib';
import { HOME_TYPES } from "../../helper/CONSTANT"
const category = [
  { title: 'Rooms', icon: "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg" , type : HOME_TYPES.ROOM },
  { title: 'Towers', icon: 'https://a0.muscache.com/pictures/d721318f-4752-417d-b4fa-77da3cbc3269.jpg' , type : HOME_TYPES.TOWER },
  { title: 'Island', icon: 'https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg' , type : HOME_TYPES.ISLAND },
  { title: 'Tiny Homes', icon: 'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg' , type : HOME_TYPES.TINY_HOME },
  { title: 'Containers', icon: 'https://a0.muscache.com/pictures/0ff9740e-52a2-4cd5-ae5a-94e1bfb560d6.jpg' , type : HOME_TYPES.CONTAINER },
  { title: 'Designs', icon: 'https://a0.muscache.com/pictures/f60700bc-8ab5-424c-912b-6ef17abc479a.jpg' , type : HOME_TYPES.DESIGN },
  { title: 'View', icon: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg' , type : HOME_TYPES.VIEW },
];

export default ({onPress}) => {
  return (
    <Box h={80}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {category.map((i) => (
          <MyBox item={i} onPress={()=>{
            onPress(i)
          }} />
        ))}
      </ScrollView>
    </Box>
  );
};

const MyBox = ({ item , onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} >
    <Box w={80} h={60} m={2} justifyContent="center" alignItems="center">
      <Image
        style={{
          width: 24,
          height: 24,
        }}
        source={{
          uri: item.icon,
        }}
      />
      <Text center >{item.title}</Text>
    </Box>
    </TouchableOpacity>
  );
};
