export interface MedicationHistory {
  id: string;
  medication_id: string;
  user_id: string;
  name: string;
  dosage: string;
  time: string;
  date: string;
  status: boolean;
}
