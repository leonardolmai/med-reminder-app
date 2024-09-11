import { InputContainer, InputWrapper } from './styles';
import { InputProps } from '@/interfaces/InputProps';
import { ErrorText } from '@/components/ErrorText';

export function Input({ error, errorMessage, isValid, ...rest }: InputProps) {
  return (
    <InputWrapper>
      <InputContainer {...rest} />
      {error && errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </InputWrapper>
  );
};
