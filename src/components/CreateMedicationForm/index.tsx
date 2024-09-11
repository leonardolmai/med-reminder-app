import { useEffect } from 'react';
import { View } from 'react-native';
import { useForm, Controller, Resolver, useFieldArray, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { router } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import { schema, FormData } from '@/schemas/CreateMedicationFormSchema';
import { Container, PickerWrapper, StyledPicker } from './styles';
import { TimePickerField } from '@/components/TimePickerField';
import { frequencyOptions } from '@/constants/frequencyOptions';
import { Medication } from '@/interfaces/Medication';
import { createMedication, createMedicationHistory } from '@/services/medication';
import { isAxiosError } from 'axios';
import { useAuth } from '@/hooks/useAuth';
import { useMedications } from '@/hooks/useMedications';
import { MedicationHistory } from '@/interfaces/MedicationHistory';
import { getCurrentDate } from '@/utils/time';

export function CreateMedicationForm() {
  const { user } = useAuth();
  const { fetchMedications, fetchMedicationHistory } = useMedications();

  const { control, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(schema) as Resolver<FormData>,
    defaultValues: {
      frequency: 'daily',
      schedules: [{ time: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'schedules',
  });

  const frequency = useWatch({
    control,
    name: 'frequency',
  });

  useEffect(() => {
    if (frequency === 'daily') {
      setValue('schedules', [{ time: '' }]);
    } else if (frequency === 'twice_a_day') {
      setValue('schedules', [{ time: '' }, { time: '' }]);
    } else if (frequency === 'three_times_a_day') {
      setValue('schedules', [{ time: '' }, { time: '' }, { time: '' }]);
    }
  }, [frequency, setValue]);

  const onSubmit = async (data: FormData) => {
    try {
      const schedulesWithId = (data.schedules ?? []).map((schedule, index) => ({ ...schedule, id: index.toString() }));
      const medication: Medication = await createMedication({ ...data, user_id: user?.id || '', schedules: schedulesWithId });

      const date = getCurrentDate();
      const medicationHistory: Omit<MedicationHistory, "id">[] = medication.schedules.map((schedule) => ({
        medication_id: medication.id,
        user_id: medication.user_id,
        name: medication.name,
        dosage: medication.dosage,
        time: schedule.time,
        date: date,
        status: false,
      }));

      const currentTime = new Date().getTime();
      const medicationHistoryToCreate = medicationHistory.filter((history) => {
        const [hours, minutes] = history.time.split(':').map((timePart) => parseInt(timePart, 10));
        const now = new Date();
        const historyTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes).getTime();
        return historyTime > currentTime;
      });

      await Promise.all(medicationHistoryToCreate.map(createMedicationHistory));
      fetchMedicationHistory();
      fetchMedications();
    } catch (error) {
      if (isAxiosError(error))
        console.log(error?.response?.data);
    }

    router.push('(tabs)');
  };

  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Nome"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            error={!!errors.name}
            errorMessage={errors.name?.message as string}
            isValid={!errors.name && !!value}
          />
        )}
        name="name"
        defaultValue=""
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Dosagem"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            error={!!errors.dosage}
            errorMessage={errors.dosage?.message as string}
            isValid={!errors.dosage && !!value}
          />
        )}
        name="dosage"
        defaultValue=""
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          // <Input
          //   placeholder="Frequência"
          //   onChangeText={onChange}
          //   onBlur={onBlur}
          //   value={value}
          //   error={!!errors.frequency}
          //   errorMessage={errors.frequency?.message as string}
          //   isValid={!errors.frequency && !!value}
          // />
          <PickerWrapper>
            <StyledPicker
              selectedValue={value}
              onValueChange={onChange}
            // style={{ borderWidth: 1, borderColor: 'black' }}
            // itemStyle={{ backgroundColor: 'lightgrey', color: 'blue', fontFamily: 'Ebrima', fontSize: 17 }}
            >
              {frequencyOptions.map(option => (
                <Picker.Item key={option.value} label={option.label} value={option.value} />
              ))}
            </StyledPicker>
          </PickerWrapper>
        )}
        name="frequency"
        defaultValue={frequencyOptions[0].value}
      />

      {fields.map((item, index) => (
        <View key={item.id}>
          <Controller
            control={control}
            name={`schedules.${index}.time` as const}
            defaultValue={item.time}
            render={({ field: { onChange, onBlur, value } }) => (
              // <Input
              //   placeholder="Hora"
              //   onChangeText={onChange}
              //   onBlur={onBlur}
              //   value={typeof value === 'string' ? value : ''}
              //   error={!!errors.schedules?.[index]?.time}
              //   errorMessage={errors.schedules?.[index]?.time?.message}
              // />
              <TimePickerField
                onChange={onChange}
                value={value}
                error={errors.schedules?.[index]?.time?.message}
              />
            )}
          />
        </View>
      ))}

      <Button onPress={handleSubmit(onSubmit)}>Salvar</Button>
    </Container>
  );
};
