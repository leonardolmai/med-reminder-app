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

export function CreateMedicationForm() {
  // const { control, handleSubmit, formState: { errors }, watch } = useForm<FormData>({
  //   resolver: yupResolver(schema) as Resolver<FormData>,
  // });

  // console.log(errors);

  const frequencyOptions = [
    { label: 'Diariamente', value: 'daily' },
    { label: 'Duas vezes ao dia', value: 'twice_a_day' },
    { label: 'Três vezes ao dia', value: 'three_times_a_day' },
  ];

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

  const onSubmit = (data: FormData) => {
    // console.log(data);
    // Alert.alert(data.email, data.password);
    router.back();
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
