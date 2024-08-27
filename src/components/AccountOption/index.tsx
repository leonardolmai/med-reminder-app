import { AccountOptionProps } from '@/interfaces/AccountOptionProps';
import { AccountOptionContainer, AccountOptionText } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

export function AccountOption({ children, isButtonLogout, ...rest }: AccountOptionProps) {
  const theme = useTheme();

  return (
    <AccountOptionContainer {...rest}>
      <AccountOptionText isButtonLogout={isButtonLogout}>{children}</AccountOptionText>
      <Ionicons name="arrow-forward" size={32} color={isButtonLogout ? theme.colors.red700 : theme.colors.gray300} />
    </AccountOptionContainer>
  );
};
