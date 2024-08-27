import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { router } from 'expo-router';
import { Container, SpanContainer, SpanLink, SpanText } from './styles';
import { FormData, schema } from '@/schemas/SignupFormSchema';

export function SignupForm() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  // console.log(errors);

  const onSubmit = (data: FormData) => {
    // console.log(data);
    // Alert.alert(data.email, data.password);
    router.push('/');
  };

  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Email"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            error={!!errors.email}
            errorMessage={errors.email?.message as string}
            isValid={!errors.email && !!value}
          />
        )}
        name="email"
        defaultValue=""
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder='Senha'
            secureTextEntry
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            error={!!errors.password}
            errorMessage={errors.password?.message as string}
            isValid={!errors.password && !!value}
          />
        )}
        name="password"
        defaultValue=""
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder='Repetir Senha'
            secureTextEntry
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            error={!!errors.repeatPassword}
            errorMessage={errors.repeatPassword?.message as string}
            isValid={!errors.repeatPassword && !!value}
          />
        )}
        name="repeatPassword"
        defaultValue=""
      />

      <Button onPress={handleSubmit(onSubmit)}>Cadastrar</Button>

      <SpanContainer>
        <SpanText>Já tem uma conta? </SpanText>
        <SpanLink onPress={() => router.push('/')}>Faça login</SpanLink>
        {/* <Link href={'/signup'}>Cadastre-se</Link> */}
      </SpanContainer>
    </Container>
  );
};
