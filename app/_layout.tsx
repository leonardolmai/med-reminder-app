import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Stack.Screen name='index' options={{headerShown: false}} />
        <Stack.Screen name='(tabs)' options={{headerShown: false}} />
      </Stack>
      {/* <StatusBar style="auto" backgroundColor={theme.colors.primary} /> */}
    </ThemeProvider>
  );
};

