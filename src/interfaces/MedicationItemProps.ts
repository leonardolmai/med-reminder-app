import { TouchableOpacityProps } from "react-native";
import { MedicationHistory } from "@/interfaces/MedicationHistory";

export interface MedicationItemProps extends TouchableOpacityProps {
  medicationHistory: MedicationHistory;
}
