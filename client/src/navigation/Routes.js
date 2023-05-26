import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen'
import LoginScreen from "../screens/LoginScreen"
import RegisterScreen from "../screens/RegisterScreen"
import HomeScreen from "../screens/HomeScreen"
import RoomScreen from "../screens/RoomScreen"
import ProfileScreen from "../screens/ProfileScreen"
import SearchScreen from "../screens/SearchScreen"
import GetStarted from "../screens/hostlisting/GetStarted"
import StepOne from "../screens/hostlisting/StepOne"
import StepTwo from "../screens/hostlisting/StepTwo"
import StepThree from "../screens/hostlisting/StepThree"
import FinalStep from "../screens/hostlisting/FinalStep"


const Stack = createNativeStackNavigator();


export default () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="RoomScreen" component={RoomScreen} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="StepOne" component={StepOne} />
      <Stack.Screen name="StepTwo" component={StepTwo} />
      <Stack.Screen name="StepThree" component={StepThree} />
      <Stack.Screen name="FinalStep" component={FinalStep} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
