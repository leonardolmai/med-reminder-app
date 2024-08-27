import styled, { DefaultTheme } from "styled-components/native";

export const TimePickerButton = styled.TouchableOpacity`
  height: 56px;
  border: 1px solid ${({ theme }: { theme: DefaultTheme }) => theme.colors.gray300};
  border-radius: 5px;
  justify-content: center;
  padding-left: 16px;
  margin-bottom: 24px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.gray100};
`;

export const TimePickerText = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.black};
`;
