import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/profile/ProfileScreen';
import AboutScreen from '../screens/profile/AboutScreen';
import FeautureScreen from '../screens/profile/FeautureScreen';
import DoctorRegisterScreen from '../screens/profile/DoctorRegisterScreen';
import SoonScreen from '../screens/profile/SoonScreen';

const Stack = createNativeStackNavigator();

const ProfileNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Feauture"
        component={FeautureScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DoctorRegister"
        component={DoctorRegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Soon"
        component={SoonScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;
