import { Tabs } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from 'styled-components/native';
import { DefaultTheme } from 'styled-components/native';

export default function TabLayout() {
  const theme: DefaultTheme = useTheme();

  return (
    <Tabs
      initialRouteName='index'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === 'index') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'medication-history') {
            iconName = focused ? 'time' : 'time-outline';
          } else if (route.name === 'account') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // return <Ionicons name={iconName} size={size} color={color} />;
          return <Ionicons name={iconName} size={32} color={color} />;
        },

        tabBarActiveTintColor: theme.colors.blue500,
        tabBarInactiveTintColor: theme.colors.black,
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarStyle: {
          paddingBottom: 8,
          paddingTop: 5,
          height: 75,
        },

        // tabBarIconStyle: {
        //   width: 64,
        //   height: 64,
        // },
      })}
    >
      <Tabs.Screen name='index' options={{ headerShown: false, tabBarLabel: 'Início' }} />
      <Tabs.Screen name='medication-history' options={{ headerShown: false, tabBarLabel: 'Histórico' }} />
      <Tabs.Screen name='account' options={{ headerShown: false, tabBarLabel: 'Conta' }} />
    </Tabs>
  );
};

