import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
});

export type FormData = yup.InferType<typeof schema>;

// export type FormData = {
//   email: string;
//   password: string;
// };
