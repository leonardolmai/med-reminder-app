import { ActivityIndicator, ViewProps } from 'react-native';
import { LoadingContainer } from './styles';
import { useTheme, DefaultTheme } from 'styled-components/native';

export function Loading({ ...rest }: ViewProps) {
  const theme: DefaultTheme = useTheme();

  return (
    <LoadingContainer {...rest}>
      <ActivityIndicator size="large" color={theme.colors.black} />
    </LoadingContainer>
  );
};
