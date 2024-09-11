import { IconButton } from "@/components/IconButton";
import { router, useLocalSearchParams } from "expo-router";
import { useTheme } from "styled-components";
import { ButtonContainer, Container, Dosage, Frequency, Name, Schedule, SchedulesContainer, Time, TopContainer } from "./index.styles";
import { Ionicons } from '@expo/vector-icons';
import { formatTime } from "@/utils/time";
import { getMedication } from "@/services/medication";
import { useEffect, useState } from "react";
import { Medication } from "@/interfaces/Medication";
import { getFrequencyLabel } from "@/utils/frequency";

export default function MedicationsDetail() {
  const { id } = useLocalSearchParams();
  const [medication, setMedication] = useState<Medication | null>(null);
  const theme = useTheme();

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


  const onGoBack = () => {
    router.back();
  }

  return (
    <Container>
      <TopContainer>
        <IconButton onPress={onGoBack}><Ionicons name="arrow-back" size={32} color={theme.colors.black} /></IconButton>
      </TopContainer>
      <ButtonContainer>
        <Name>{medication?.name}</Name>
        <Dosage>{medication?.dosage}</Dosage>
        <Frequency>{getFrequencyLabel(medication?.frequency || '')}</Frequency>
        <SchedulesContainer>
          {medication?.schedules.map(schedule => (
            <Schedule key={schedule.id}>
              <Time>{formatTime(schedule.time)}</Time>
            </Schedule>
          ))}
        </SchedulesContainer>
      </ButtonContainer>
    </Container>
  );
}
