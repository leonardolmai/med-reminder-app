import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { router } from 'expo-router';
import { Container, SpanContainer, SpanLink, SpanText } from './styles';
import { schema, FormData } from '@/schemas/LoginFormSchema';

export function LoginForm() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  // console.log(errors);

  const onSubmit = (data: FormData) => {
    // console.log(data);
    // Alert.alert(data.email, data.password);
    router.push('(tabs)');
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
          // style={{ borderStyle: 'solid', borderColor: 'black', borderWidth: 2 }}
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

      <Button onPress={handleSubmit(onSubmit)}>Entrar</Button>

      <SpanContainer>
        <SpanText>Não tem uma conta? </SpanText>
        <SpanLink onPress={() => router.push('signup')}>Cadastre-se</SpanLink>
        {/* <Link href={'/signup'}>Cadastre-se</Link> */}
      </SpanContainer>
    </Container>
  );
};
