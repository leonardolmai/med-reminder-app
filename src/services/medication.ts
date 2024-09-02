import { Medication } from "@/interfaces/Medication";
import { MedicationHistory } from "@/interfaces/MedicationHistory";
import { api } from "@/utils/api";
import { handleError } from "@/utils/handleError";
import { getCurrentDate, parseDateWithZeroedTime } from "@/utils/time";
import { AxiosResponse } from "axios";

export async function getAllMedicationHistoriesOfMedication(medication_id: string): Promise<MedicationHistory[]> {
  try {
    const response: AxiosResponse<MedicationHistory[]> = await api.get(`/medication_history?medication_id=${medication_id}`);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
}

export async function getMedications(user_id: string): Promise<Medication[]> {
  try {
    const response: AxiosResponse<Medication[]> = await api.get(`/medications?user_id=${user_id}`);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
}

export async function getMedication(id: string): Promise<Medication | null> {
  try {
    const response: AxiosResponse<Medication> = await api.get(`/medications/${id}`);

    if (response.data) {
      return response.data;
    }

    return null
  } catch (error) {
    handleError(error);
    throw error;
  }
}

export async function createMedication(data: Omit<Medication, "id">): Promise<Medication> {
  try {
    const response: AxiosResponse<Medication> = await api.post('/medications', data);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
}

export async function updateMedication(data: Medication): Promise<Medication | null> {
  try {
    const existingMedication = await getMedication(data.id);

    if (existingMedication) {
      console.log('Medication already exists');
      const updatedMedication = { ...existingMedication, ...data };

      const response: AxiosResponse<Medication> = await api.put(`/medications/${existingMedication.id}`, updatedMedication);
      return response.data;
    }

    return null;
  } catch (error) {
    handleError(error);
    throw error;
  }
}

export async function deleteMedication(id: string): Promise<void> {
  try {
    await api.delete(`/medications/${id}`);
  } catch (error) {
    handleError(error);
    throw error;
  }
}

export async function getMedicationHistories(user_id: string): Promise<MedicationHistory[]> {
  try {
    const response: AxiosResponse<MedicationHistory[]> = await api.get(`/medication_history?user_id=${user_id}`);

    const medicationHistories = response.data;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const filteredHistories = medicationHistories.filter(history =>
      history.status === true || (parseDateWithZeroedTime(history.date) < today && history.status === false)
    );

    return filteredHistories;
  } catch (error) {
    handleError(error);
    throw error;
  }
}

export async function getMedicationHistoriesToTake(user_id: string): Promise<MedicationHistory[]> {
  try {
    const date = getCurrentDate();

    const response: AxiosResponse<MedicationHistory[]> = await api.get(`/medication_history?user_id=${user_id}&status=false&date=${date}`);

    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
}

export async function getMedicationHistory(id: string): Promise<MedicationHistory | null> {
  try {
    const response: AxiosResponse<MedicationHistory> = await api.get(`/medication_history/${id}`);
    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error) {
    handleError(error);
    throw error;
  }
}

export async function updateMedicationHistory(data: MedicationHistory): Promise<MedicationHistory | null> {
  try {
    const existingMedicationHistory = await getMedicationHistory(data.id);

    if (existingMedicationHistory) {
      console.log('Medication history already exists');
      const updatedMedicationHistory = { ...existingMedicationHistory, ...data };

      const response: AxiosResponse<MedicationHistory> = await api.put(`/medication_history/${existingMedicationHistory.id}`, updatedMedicationHistory);
      return response.data;
    }

    return null;
  } catch (error) {
    handleError(error);
    throw error;
  }
}

export async function createMedicationHistory(data: Omit<MedicationHistory, "id">): Promise<MedicationHistory> {
  try {
    const response: AxiosResponse<MedicationHistory> = await api.post('/medication_history', data);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
}

export async function deleteMedicationHistory(id: string): Promise<void> {
  try {
    await api.delete(`/medication_history/${id}`);
  } catch (error) {
    handleError(error);
    throw error;
  }
}
