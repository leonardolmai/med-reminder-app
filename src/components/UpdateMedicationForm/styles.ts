import { PickerProps, Picker } from '@react-native-picker/picker';
import styled, { DefaultTheme } from 'styled-components/native';

export const Container = styled.View`
  width: 250px;
  margin: 16px auto 0;
`;

const getCustomStyles = (props: PickerProps & { theme: DefaultTheme }) => `
  color: ${props.theme.colors.black};
  background-color: ${props.theme.colors.gray100};
  border: 1px solid ${props.theme.colors.gray300};
`;

export const PickerWrapper = styled.View`
  ${getCustomStyles}
  margin-bottom: 24px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 5px;
  height: 56px;
`;

// const StyledPicker = styled(Picker)`
export const StyledPicker = styled(Picker) <PickerProps>`
  ${getCustomStyles}
  height: 42px;
  width: 100%;
  /* height: 50px;
  width: 100%;
  margin-bottom: 16px; */
`;
