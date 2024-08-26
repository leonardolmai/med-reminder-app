import { MedicationHistoryItemProps } from "@/interfaces/MedicationHistoryItemProps";
import { MedicationHistoryItemContainer, MedicationHistoryItemContainerBottom, MedicationHistoryItemContainerTop, Name, Time, MedicationDate } from "./styles";
import { useTheme } from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { formatTime } from "@/utils/time";

export function MedicationHistoryItem({ medicationHistory }: MedicationHistoryItemProps) {
  const theme = useTheme();

  return (
    <MedicationHistoryItemContainer medicationHistory={medicationHistory}>
      <MedicationHistoryItemContainerTop>
        <Name>{medicationHistory.name}</Name>
        {medicationHistory.status ?
          <Ionicons name="checkmark-circle" size={32} color={theme.colors.green700} />
          : <Ionicons name="close-circle" size={32} color={theme.colors.red700} />}
      </MedicationHistoryItemContainerTop>
      <MedicationHistoryItemContainerBottom>
        <Time>{formatTime(medicationHistory.time)}</Time>
        <MedicationDate>{medicationHistory.date}</MedicationDate>
      </MedicationHistoryItemContainerBottom>
    </MedicationHistoryItemContainer>
  )
}
