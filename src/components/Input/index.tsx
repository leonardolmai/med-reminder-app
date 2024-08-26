import { InputContainer, InputError, InputWrapper } from './styles';
import { InputProps } from '@/interfaces/InputProps';

export function Input({ error, errorMessage, isValid, ...rest }: InputProps) {
  return (
    <InputWrapper>
      <InputContainer {...rest} />
      {error && errorMessage && <InputError>{errorMessage}</InputError>}
    </InputWrapper>
  );
};
