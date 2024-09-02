import { MedicationHistory } from "@/interfaces/MedicationHistory";

export interface MedicationContextProps {
  medications: MedicationHistory[];
  medicationHistory: MedicationHistory[];
  fetchMedications: () => void;
  fetchMedicationHistory: () => void;
}
