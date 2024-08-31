import { Container, Logo, Title } from './index.styles';
import logo from '@/assets/logo.png';
import { Loading } from '@/components/Loading';
import { LoginForm } from '@/components/LoginForm';
import { useAuth } from '@/hooks/useAuth';

export default function App() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <Loading></Loading>
    );
  }

  return (
    <Container>
      <Logo source={logo} />
      <Title>Lembrete de medicação</Title>
      <LoginForm />
    </Container>
  );
}

