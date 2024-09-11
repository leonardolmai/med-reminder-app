import { Container, Logo, Title } from './index.styles';
import logo from '@/assets/logo.png';
import { SignupForm } from '@/components/SignupForm';

export default function Signup() {
  return (
    <Container>
      <Logo source={logo} />
      <Title>Lembrete de medicação</Title>
      <SignupForm />
    </Container>
  );
}
