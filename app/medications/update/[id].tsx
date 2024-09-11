import { Container, Title, TopContainer } from '../index.styles';
import { IconButton } from '@/components/IconButton';
import { theme } from '@/styles/theme';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { UpdateMedicationForm } from '@/components/UpdateMedicationForm';
import { Medication } from '@/interfaces/Medication';
import { getMedication } from '@/services/medication';
import { useState, useEffect } from 'react';

export default function UpdateMedication() {
  const { id } = useLocalSearchParams();
  const [medication, setMedication] = useState<Medication | null>(null);

  useEffect(() => {
    async function fetchMedication() {
      try {
        const medication = await getMedication(id.toString());

        setMedication(medication);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMedication();
  }, [router, id]);

  if (!medication) {
    return null;
  }

  const onGoBack = () => {
    router.back();
  }

  return (
    <Container>
      <TopContainer>
        <IconButton onPress={onGoBack}><Ionicons name="arrow-back" size={32} color={theme.colors.black} /></IconButton>
        <Title>Editar medicamento</Title>
      </TopContainer>
      <UpdateMedicationForm medication={medication || {} as Medication} />
    </Container>
  );
};
