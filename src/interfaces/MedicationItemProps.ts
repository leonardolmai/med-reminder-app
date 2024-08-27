import { Medication } from "@/interfaces/Medication";
import { TouchableOpacityProps } from "react-native";

export interface MedicationItemProps extends TouchableOpacityProps {
  medication: Medication;
}
