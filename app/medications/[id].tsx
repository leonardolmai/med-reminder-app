import { IconButton } from "@/components/IconButton";
import { router, useLocalSearchParams } from "expo-router";
import { useTheme } from "styled-components";
import { ButtonContainer, Container, Dosage, Frequency, Name, Schedule, SchedulesContainer, Time, TopContainer } from "./index.styles";
import { Ionicons } from '@expo/vector-icons';
import { Medication } from "@/interfaces/Medication";
import { formatTime } from "@/utils/time";

export default function MedicationsDetail() {
  const { id } = useLocalSearchParams();

  const medication: Medication = {
    id: 1,
    name: "Paracetamol",
    dosage: "1 comprimido",
    frequency: "4 vezes ao dia",
    schedules: [
      {
        id: 1,
        medication: 1,
        time: "08:00",
      },
      {
        id: 2,
        medication: 1,
        time: "12:00",
      },
      {
        id: 3,
        medication: 1,
        time: "16:00",
      },
      {
        id: 4,
        medication: 1,
        time: "20:00",
      },
    ],
  }

  const theme = useTheme()

  const onGoBack = () => {
    router.back();
  }

  return (
    <Container>
      <TopContainer>
        <IconButton onPress={onGoBack}><Ionicons name="arrow-back" size={32} color={theme.colors.black} /></IconButton>
      </TopContainer>
      <ButtonContainer>
        <Name>{medication.name}</Name>
        <Dosage>{medication.dosage}</Dosage>
        <Frequency>{medication.frequency}</Frequency>
        <SchedulesContainer>
          {medication.schedules.map(schedule => (
            <Schedule key={schedule.id}>
              <Time>{formatTime(schedule.time)}</Time>
            </Schedule>
          ))}
        </SchedulesContainer>
      </ButtonContainer>
    </Container>
  );
}
