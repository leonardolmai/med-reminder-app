import { ErrorTextProps } from '@/interfaces/ErrorTextProps';
import { StyledErrorText } from './styles';

export function ErrorText({ children, ...rest }: ErrorTextProps) {
  return (
    <StyledErrorText {...rest}>
      {children}
    </StyledErrorText>
  );
};
