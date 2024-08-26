import { ActionButtons, Dosage, MedicationItemContainer, MedicationItemContainerBottom, MedicationItemContainerTop, Name, Time } from "./styles";
import { IconButton } from "../IconButton";
import { useTheme } from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Alert } from "react-native";
import { MedicationItemProps } from "@/interfaces/MedicationItemProps";
import { formatTime } from "@/utils/time";

export function MedicationItem({ medication }: MedicationItemProps) {
  const theme = useTheme();

  const handlePress = () => {
    router.push(`medications/${medication.id}`);
  }

  const handlePressOnUpdateButton = () => {
    router.push(`medications/update/${medication.id}`);
  }

  const handlePressOnDeleteButton = () => {
    Alert.alert(
      'Excluir medicação',
      `Deseja excluir a medicação?\n${medication.name}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => {
          },
        },
      ]
    );
  }

  const handlePressOnCheckButton = () => {
    Alert.alert(
      'Medicação tomada',
      `Deseja marcar a medicação como tomada?\n${medication.name} - ${formatTime(medication.schedules[0].time)}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => {
          },
        },
      ]
    );
  }

  return (
    <MedicationItemContainer medication={medication} onPress={handlePress}>
      <MedicationItemContainerTop>
        <Name>{medication.name}</Name>
      </MedicationItemContainerTop>
      <MedicationItemContainerBottom>
        <Time>{formatTime(medication.schedules[0].time)}</Time>
        <Dosage>{medication.dosage}</Dosage>
        <ActionButtons>
          <IconButton onPress={handlePressOnUpdateButton}><Ionicons name="create-outline" size={32} color={theme.colors.orange700} /></IconButton>
          <IconButton onPress={handlePressOnDeleteButton}><Ionicons name="trash-outline" size={32} color={theme.colors.red700} /></IconButton>
          <IconButton onPress={handlePressOnCheckButton}><Ionicons name="checkmark-circle" size={32} color={theme.colors.green700} /></IconButton>
        </ActionButtons>
      </MedicationItemContainerBottom>
    </MedicationItemContainer>
  )
}
