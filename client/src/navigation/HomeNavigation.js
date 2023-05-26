import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '../presets';

import HomeTab from '../screens/HomeTabs/index';
import FavTab from '../screens/HomeTabs/favourite';
import MyListTab from '../screens/HomeTabs/mylisting';
import AccountTab from '../screens/HomeTabs/account';

const Tab = createBottomTabNavigator();

export default ({ extraData }) => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: colors.default.app,
          inactiveTintColor: '#555',
        }}
        screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Explore"
          options={{
            tabBarLabel: 'Explore',
            tabBarIcon: (tabInfo) => (
              <Icon
                name={tabInfo.focused ? 'navigate' : 'navigate-outline'}
                size={25}
                color={tabInfo.focused ? colors.default.app : '#555'}
              />
            ),
          }}>
          {(props) => <HomeTab {...props} extraData={extraData} />}
        </Tab.Screen>
        <Tab.Screen
          name="Favourite"
          options={{
            tabBarLabel: 'Favourite',
            tabBarIcon: (tabInfo) => (
              <Icon
                name={tabInfo.focused ? 'heart-circle' : 'heart-circle-outline'}
                size={25}
                color={tabInfo.focused ? colors.default.app : '#555'}
              />
            ),
          }}>
          {(props) => <FavTab {...props} extraData={extraData} />}
        </Tab.Screen>
        <Tab.Screen
          name="MyListing"
          options={{
            tabBarLabel: 'MyListing',
            tabBarIcon: (tabInfo) => (
              <Icon
                name={tabInfo.focused ? 'list-circle' : 'list-circle-outline'}
                size={25}
                color={tabInfo.focused ? colors.default.app : '#555'}
              />
            ),
          }}>
          {(props) => <MyListTab {...props} extraData={extraData} />}
        </Tab.Screen>
        <Tab.Screen
          name="Account"
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: (tabInfo) => (
              <Icon
                name={tabInfo.focused ? 'person' : 'person-outline'}
                size={25}
                color={tabInfo.focused ? colors.default.app : '#555'}
              />
            ),
          }}>
          {(props) => <AccountTab {...props} extraData={extraData} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
