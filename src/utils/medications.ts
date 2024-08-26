import { Medication } from "@/interfaces/Medication";
import { MedicationHistory } from "@/interfaces/MedicationHistory";

export const medications: Medication[] = [
  {
    id: 1,
    name: "Paracetamol",
    dosage: "1 comprimido",
    frequency: "4 vezes ao dia",
    schedules: [
      {
        id: 1,
        medication: 1,
        time: "08:00",
      },
      // {
      //   id: 2,
      //   medication: 1,
      //   time: "12:00",
      // },
      // {
      //   id: 3,
      //   medication: 1,
      //   time: "16:00",
      // },
      // {
      //   id: 4,
      //   medication: 1,
      //   time: "20:00",
      // },
    ],
  },
  {
    id: 2,
    name: "Dipirona",
    dosage: "1 comprimido",
    frequency: "3 vezes ao dia",
    schedules: [
      {
        id: 5,
        medication: 2,
        time: "09:00",
      },
      // {
      //   id: 6,
      //   medication: 2,
      //   time: "15:00",
      // },
      // {
      //   id: 7,
      //   medication: 2,
      //   time: "21:00",
      // },
    ],
  },
  {
    id: 3,
    name: "Omeprazol",
    dosage: "1 comprimido",
    frequency: "1 vez ao dia",
    schedules: [
      {
        id: 8,
        medication: 3,
        time: "10:00",
      },
    ],
  },
  {
    id: 4,
    name: "Dorflex",
    dosage: "1 comprimido",
    frequency: "2 vezes ao dia",
    schedules: [
      {
        id: 9,
        medication: 4,
        time: "11:00",
      },
      // {
      //   id: 10,
      //   medication: 4,
      //   time: "19:00",
      // },
    ],
  },
  {
    id: 5,
    name: "Doril",
    dosage: "1 comprimido",
    frequency: "2 vezes ao dia",
    schedules: [
      {
        id: 11,
        medication: 5,
        time: "14:00",
      },
      // {
      //   id: 12,
      //   medication: 5,
      //   time: "22:00",
      // },
    ],
  },
  {
    id: 6,
    name: "Fluoxetina",
    dosage: "1 comprimido",
    frequency: "1 vez ao dia",
    schedules: [
      {
        id: 13,
        medication: 6,
        time: "18:00",
      },
    ],
  }
];

export const medicationsHistory: MedicationHistory[] = [
  {
    id: 1,
    name: "Paracetamol",
    time: "08:00",
    date: "12/10/2021",
    status: true,
  },
  {
    id: 2,
    name: "Dipirona",
    time: "12:00",
    date: "12/10/2021",
    status: false,
  },
  {
    id: 3,
    name: "Paracetamol",
    time: "16:00",
    date: "12/10/2021",
    status: true,
  },
  {
    id: 4,
    name: "Dipirona",
    time: "20:00",
    date: "12/10/2021",
    status: true,
  },
  {
    id: 5,
    name: "Paracetamol",
    time: "08:00",
    date: "13/10/2021",
    status: true,
  },
  {
    id: 6,
    name: "Dipirona",
    time: "12:00",
    date: "13/10/2021",
    status: false,
  },
  {
    id: 7,
    name: "Paracetamol",
    time: "16:00",
    date: "13/10/2021",
    status: true,
  },
];
