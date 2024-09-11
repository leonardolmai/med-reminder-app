import { ButtonContainer, ButtonText } from './styles';
import { ButtonProps } from '@/interfaces/ButtonProps';

export function Button({ children, backgroundColor, onPress, ...rest }: ButtonProps) {
  return (
    <ButtonContainer backgroundColor={backgroundColor} onPress={onPress} {...rest}>
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
};
