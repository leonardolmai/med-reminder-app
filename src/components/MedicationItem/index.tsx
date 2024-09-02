import { ActionButtons, Dosage, MedicationItemContainer, MedicationItemContainerBottom, MedicationItemContainerTop, Name, Time } from "./styles";
import { IconButton } from "../IconButton";
import { useTheme } from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Alert } from "react-native";
import { MedicationItemProps } from "@/interfaces/MedicationItemProps";
import { formatTime, getCurrentDate } from "@/utils/time";
import { deleteMedication, deleteMedicationHistory, getAllMedicationHistoriesOfMedication, updateMedicationHistory } from "@/services/medication";
import { isAxiosError } from "axios";
import { useMedications } from "@/hooks/useMedications";

export function MedicationItem({ medicationHistory }: MedicationItemProps) {
  const theme = useTheme();
  const { fetchMedications, fetchMedicationHistory } = useMedications();

  const handlePress = () => {
    router.push(`medications/${medicationHistory.medication_id}`);
  }

  const handlePressOnUpdateButton = () => {
    router.push(`medications/update/${medicationHistory.medication_id}`);
  }

  const handlePressOnDeleteButton = () => {
    Alert.alert(
      'Excluir medicação',
      `Deseja excluir a medicação?\n${medicationHistory.name}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: async () => {
            try {
              await deleteMedication(medicationHistory.medication_id);

              const date = getCurrentDate();

              const medicationHistoriesOfMedication = await getAllMedicationHistoriesOfMedication(medicationHistory.medication_id);

              const historiesToDelete = medicationHistoriesOfMedication.filter(history =>
                history.date === date &&
                !history.status &&
                history.medication_id === medicationHistory.medication_id
              );

              await Promise.all(historiesToDelete.map(history => deleteMedicationHistory(history.id)));

              fetchMedicationHistory();
              fetchMedications();
            } catch (error) {
              if (isAxiosError(error))
                console.log(error?.response?.data);
            }
          },
        },
      ]
    );
  }

  const handlePressOnCheckButton = () => {
    Alert.alert(
      'Medicação tomada',
      `Deseja marcar a medicação como tomada?\n${medicationHistory.name} - ${formatTime(medicationHistory.time)}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: async () => {
            try {
              const medicationHistoryUpdated = await updateMedicationHistory({ ...medicationHistory, status: true });

              fetchMedicationHistory();
              fetchMedications();
            } catch (error) {
              if (isAxiosError(error))
                console.log(error?.response?.data);
            }
          },
        },
      ]
    );
  }

  return (
    <MedicationItemContainer medicationHistory={medicationHistory} onPress={handlePress}>
      <MedicationItemContainerTop>
        <Name>{medicationHistory.name}</Name>
      </MedicationItemContainerTop>
      <MedicationItemContainerBottom>
        <Time>{medicationHistory.time ? formatTime(medicationHistory.time) : 'N/A'}</Time>
        <Dosage>{medicationHistory.dosage}</Dosage>
        <ActionButtons>
          <IconButton onPress={handlePressOnUpdateButton}><Ionicons name="create-outline" size={32} color={theme.colors.orange700} /></IconButton>
          <IconButton onPress={handlePressOnDeleteButton}><Ionicons name="trash-outline" size={32} color={theme.colors.red700} /></IconButton>
          <IconButton onPress={handlePressOnCheckButton}><Ionicons name="checkmark-circle" size={32} color={theme.colors.green700} /></IconButton>
        </ActionButtons>
      </MedicationItemContainerBottom>
    </MedicationItemContainer>
  )
}
