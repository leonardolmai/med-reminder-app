// import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@/styles/theme';
import { Stack } from 'expo-router';
import { AuthProvider } from '@/contexts/AuthContext';

export default function Layout() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Stack>
          {/* <Stack initialRouteName='(tabs)'> */}
          <Stack.Screen name='index' options={{ headerShown: false }} />
          <Stack.Screen name='signup' options={{ headerShown: false }} />
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
          <Stack.Screen name='users' options={{ headerShown: false }} />
          <Stack.Screen name='medications' options={{ headerShown: false }} />
          {/* <Stack.Screen name="users/update" options={{ headerShown: false }} />
          <Stack.Screen name="medications/[id]" options={{ headerShown: false }} />
          <Stack.Screen name="medications/create" options={{ headerShown: false }} />
          <Stack.Screen name="medications/update/[id]" options={{ headerShown: false }} /> */}
        </Stack>
      </ThemeProvider>
    </AuthProvider>
  );
};

