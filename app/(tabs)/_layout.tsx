import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import { theme } from '@/styles/theme';

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName='index'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === 'index') {
            iconName = focused ? 'home' : 'home-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.secondary,
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarStyle: {
          paddingBottom: 8,
          paddingTop: 5,
          height: 64,
        },
      })}
    >
      <Tabs.Screen name='index' options={{ headerShown: false, tabBarLabel: 'Index'}} />
    </Tabs>
  );
};

