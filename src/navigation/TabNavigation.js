import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../constants/colors';
import HomeNavigation from './HomeNavigation';
import ProfileNavigation from './ProfileNavigation';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.g700,
        tabBarInactiveTintColor: 'white',
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="HomeNavigation"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={32} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="ProfileNavigation"
        component={ProfileNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={32} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.g400,
  },
});
export default TabNavigation;
