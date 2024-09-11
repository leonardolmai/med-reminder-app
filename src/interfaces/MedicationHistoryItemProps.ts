import { ViewProps } from "react-native";
import { MedicationHistory } from "@/interfaces/MedicationHistory"

export interface MedicationHistoryItemProps extends ViewProps {
  medicationHistory: MedicationHistory;
}
