import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().notRequired().nullable(),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
});

export type FormData = yup.InferType<typeof schema>;
