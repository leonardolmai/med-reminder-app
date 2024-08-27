import { TouchableOpacityProps } from 'react-native';
import { IconButtonContainer } from './styles';

export function IconButton({ children, ...rest }: TouchableOpacityProps) {
  return (
    <IconButtonContainer {...rest}>
      {children}
    </IconButtonContainer>
  );
};
