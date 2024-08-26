// import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@/styles/theme';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <Stack>
        {/* <Stack initialRouteName='(tabs)'> */}
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='signup' options={{ headerShown: false }} />
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
};

