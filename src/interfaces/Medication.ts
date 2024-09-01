import { Schedule } from "@/interfaces/Schedule";

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  schedules: Schedule[];
}
