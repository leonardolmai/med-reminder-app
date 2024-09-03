import { createContext, useState, useEffect } from 'react';
import { getMedicationHistories, getMedicationHistoriesToTake } from '@/services/medication';
import { useAuth } from '@/hooks/useAuth';
import { MedicationContextProps } from '@/interfaces/MedicationContextProps';
import { MedicationProviderProps } from '@/interfaces/MedicationProviderProps';
import { MedicationHistory } from '@/interfaces/MedicationHistory';

export const MedicationContext = createContext<MedicationContextProps>({} as MedicationContextProps);

export function MedicationProvider({ children }: MedicationProviderProps) {
  const { user } = useAuth();
  const [medications, setMedications] = useState<MedicationHistory[]>([]);
  const [medicationHistory, setMedicationHistory] = useState<MedicationHistory[]>([]);

  const fetchMedications = async () => {
    const medications = await getMedicationHistoriesToTake(user?.id || '');
    setMedications(medications);
  };

  const fetchMedicationHistory = async () => {
    const medicationHistory = await getMedicationHistories(user?.id || '');
    setMedicationHistory(medicationHistory);
  };

  useEffect(() => {
    fetchMedications();
    fetchMedicationHistory();
  }, [user]);

  return (
    <MedicationContext.Provider value={{ medications, medicationHistory, fetchMedications, fetchMedicationHistory }}>
      {children}
    </MedicationContext.Provider>
  );
};
