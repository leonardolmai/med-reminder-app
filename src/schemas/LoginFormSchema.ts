import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().email().required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
});
