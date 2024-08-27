import { useForm, Controller, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { router } from 'expo-router';
import { User } from '@/interfaces/User'
import { Container } from './styles';
import { schema, FormData } from '@/schemas/UpdateUserInfoFormSchema';

export function UpdateUserInfoForm() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema) as Resolver<FormData>,
  });

  const user: User = {
    id: 1,
    name: 'Leonardo',
    email: 'leonardo@example.com'
  };

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
            value={value || ''}
            error={!!errors.name}
            errorMessage={errors.name?.message as string}
            isValid={!errors.name && !!value}
          />
        )}
        name="name"
        defaultValue={user.name}
      />

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
        defaultValue={user.email}
      />

      <Button onPress={handleSubmit(onSubmit)}>Salvar</Button>
    </Container>
  );
};
