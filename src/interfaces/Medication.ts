import { Schedule } from "@/interfaces/Schedule";

export interface Medication {
  id: number;
  name: string;
  dosage: string;
  frequency: string;
  schedules: Schedule[];
}
