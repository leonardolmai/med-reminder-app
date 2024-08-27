import { Title, TopContainer, Container } from './index.styles';
import { IconButton } from '@/components/IconButton';
import { theme } from '@/styles/theme';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { CreateMedicationForm } from '@/components/CreateMedicationForm';

export default function CreateMedication() {
  const onGoBack = () => {
    router.back();
  }

  return (
    <Container>
      <TopContainer>
        <IconButton onPress={onGoBack}><Ionicons name="arrow-back" size={32} color={theme.colors.black} /></IconButton>
        <Title>Adicionar Medicamento</Title>
      </TopContainer>
      <CreateMedicationForm />
    </Container>
  );
};
