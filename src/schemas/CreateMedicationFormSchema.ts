import * as yup from 'yup';

export const schedulesSchema = yup.object().shape({
  time: yup.string().required('Hora é obrigatória'),
});

export const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  dosage: yup.string().required('Dosagem é obrigatória'),
  frequency: yup.string().required('Frequência é obrigatória'),
  schedules: yup.array().of(schedulesSchema).min(1, 'Pelo menos um horário é obrigatório'),
});

export type FormData = yup.InferType<typeof schema>;
