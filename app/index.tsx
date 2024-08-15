import { Button, Text } from 'react-native';
import { Container } from './index.styles';
import { router } from 'expo-router';

export default function App() {
  return (
    <Container>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title="Press me" onPress={() => router.push('(tabs)')} />
    </Container>
  );
}

