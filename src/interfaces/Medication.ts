import { Schedule } from "@/interfaces/Schedule";

export interface Medication {
  id: string;
  user_id: string;
  name: string;
  dosage: string;
  frequency: string;
  schedules: Schedule[];
}
