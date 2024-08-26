import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
  repeatPassword: yup.string().required('Repetir senha é obrigatório').oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
});

export type FormData = yup.InferType<typeof schema>;
