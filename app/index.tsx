import { Container, Logo, Title } from './index.styles';
import logo from '@/assets/logo.png';
import { LoginForm } from '@/components/LoginForm';
// import { Redirect } from 'expo-router';

export default function App() {
  // return <Redirect href="(tabs)" />

  return (
    <Container>
      <Logo source={logo} />
      <Title>Lembrete de medicação</Title>
      <LoginForm />
    </Container>
  );
}

