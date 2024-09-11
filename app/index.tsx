import { Container, Logo, Title } from './index.styles';
import logo from '@/assets/logo.png';
import { Loading } from '@/components/Loading';
import { LoginForm } from '@/components/LoginForm';
import { useAuth } from '@/hooks/useAuth';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const { loading } = useAuth();

  useEffect(() => {
    const getPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Você precisa habilitar as permissões de notificação para receber lembretes.');
      }
    };

    getPermissions();
  }, []);

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

