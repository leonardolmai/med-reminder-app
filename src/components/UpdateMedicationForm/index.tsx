import { useForm, Controller, Resolver, useFieldArray, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { router } from 'expo-router';
import { schema, FormData } from '@/schemas/UpdateMedicationFormSchema';
import { Container, PickerWrapper, StyledPicker } from './styles';
import { useEffect } from 'react';
import { UpdateMedicationFormProps } from '@/interfaces/UpdateMedicationFormProps';
import { Picker } from '@react-native-picker/picker';
import { View } from 'react-native';
import { TimePickerField } from '@/components/TimePickerField';
import { frequencyOptions } from '@/constants/frequencyOptions';
import { createMedicationHistory, deleteMedicationHistory, getAllMedicationHistoriesOfMedication, updateMedication } from '@/services/medication';
import { isAxiosError } from 'axios';
import { useAuth } from '@/hooks/useAuth';
import { useMedications } from '@/hooks/useMedications';
import { MedicationHistory } from '@/interfaces/MedicationHistory';
import { getCurrentDate } from '@/utils/time';

export function UpdateMedicationForm({ medication }: UpdateMedicationFormProps) {
  const { user } = useAuth();
  const { fetchMedications, fetchMedicationHistory } = useMedications();

  const { control, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(schema) as Resolver<FormData>,
    defaultValues: {
      frequency: medication.frequency,
      schedules: medication.schedules,
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
    if (frequency !== medication.frequency) {
      if (frequency === 'daily') {
        setValue('schedules', [{ time: '' }]);
      } else if (frequency === 'twice_a_day') {
        setValue('schedules', [{ time: '' }, { time: '' }]);
      } else if (frequency === 'three_times_a_day') {
        setValue('schedules', [{ time: '' }, { time: '' }, { time: '' }]);
      }
    } else {
      // const count = medication.schedules.length;
      // if (count > 0) {
      //   if (count === 1 && frequency === 'twice_a_day') {
      //     append({ time: '' });
      //   } else if (count === 1 && frequency === 'three_times_a_day') {
      //     append({ time: '' });
      //     append({ time: '' });
      //   } else if (count === 2 && frequency === 'three_times_a_day') {
      //     append({ time: '' });
      // }
      const updatedSchedules = medication.schedules.map((item) => ({ time: item.time }));
      // console.log(updatedSchedules);
      setValue('schedules', updatedSchedules);
    }
  }, [frequency]);

  const onSubmit = async (data: FormData) => {
    try {
      const schedulesWithId = (data.schedules ?? []).map((schedule, index) => ({ ...schedule, id: index.toString() }));
      const medicationUpdated = await updateMedication({ ...data, id: medication.id, user_id: user?.id || '', schedules: schedulesWithId });

      if (!medicationUpdated) {
        return;
      }

      const date = getCurrentDate();

      const medicationHistoriesOfMedication = await getAllMedicationHistoriesOfMedication(medicationUpdated.id, user?.id || '');

      const historiesToDelete = medicationHistoriesOfMedication.filter(history =>
        history.date === date &&
        !history.status &&
        history.medication_id === medicationUpdated.id
      );

      await Promise.all(historiesToDelete.map(history => deleteMedicationHistory(history.id)));

      const medicationHistory: Omit<MedicationHistory, "id">[] = medicationUpdated.schedules.map((schedule) => ({
        medication_id: medicationUpdated.id,
        user_id: medicationUpdated.user_id,
        name: medicationUpdated.name,
        dosage: medicationUpdated.dosage,
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
        defaultValue={medication.name}
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
        defaultValue={medication.dosage}
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
