const axios = require('axios');
const cron = require('node-cron');

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

const getAllMedications = async () => {
  try {
    const response = await api.get('/medications');
    return response.data;
  } catch (error) {
    console.error('Erro ao obter medicações:', error);
    throw error;
  }
};

const getCurrentDate = () => {
  const today = new Date();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  const date = `${day}/${month}/${today.getFullYear()}`;
  return date;
};

const createMedicationHistory = async (history) => {
  try {
    await api.post('/medication_history', history);
  } catch (error) {
    console.error('Erro ao criar histórico de medicação:', error);
  }
};

const generateMedicationHistory = (medications, date) => {
  return medications.flatMap((medication) =>
    medication.schedules.map((schedule) => ({
      medication_id: medication.id,
      user_id: medication.user_id,
      name: medication.name,
      dosage: medication.dosage,
      time: schedule.time,
      date: date,
      status: false,
    }))
  );
};

// cron.schedule('* * * * *', async () => {
cron.schedule('1 0 * * *', async () => {
  try {
    const medications = await getAllMedications();
    const date = getCurrentDate();
    const medicationHistory = generateMedicationHistory(medications, date);
    
    await Promise.all(medicationHistory.map(createMedicationHistory));
    console.log('Histórico de medicação criado com sucesso');
  } catch (error) {
    console.error('Erro ao criar histórico de medicação:', error);
  }
});
