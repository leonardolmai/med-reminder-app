import { Container, Title, TopContainer } from '../index.styles';
import { IconButton } from '@/components/IconButton';
import { theme } from '@/styles/theme';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { UpdateMedicationForm } from '@/components/UpdateMedicationForm';
import { Medication } from '@/interfaces/Medication';

export default function UpdateMedication() {
  const { id } = useLocalSearchParams();

  const medication: Medication = {
    id: 1,
    name: "Paracetamol",
    dosage: "1 comprimido",
    frequency: "twice_a_day",
    schedules: [
      {
        id: 1,
        medication: 1,
        time: "08:00",
      },
      {
        id: 2,
        medication: 1,
        time: "20:00",
      }
    ]
  };

  const onGoBack = () => {
    router.back();
  }

  return (
    <Container>
      <TopContainer>
        <IconButton onPress={onGoBack}><Ionicons name="arrow-back" size={32} color={theme.colors.black} /></IconButton>
        <Title>Editar medicamento</Title>
      </TopContainer>
      <UpdateMedicationForm medication={medication} />
    </Container>
  );
};
