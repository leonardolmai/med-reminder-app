import styled, { DefaultTheme } from "styled-components/native";
import { InputProps } from "@/interfaces/InputProps";

export const InputWrapper = styled.View`
  margin-bottom: 24px;
`;

const getCustomStyles = (props: InputProps & { theme: DefaultTheme }) => `
  color: ${props.theme.colors.black};
  background-color: ${props.theme.colors.gray100};
  border: 1px solid ${props.theme.colors.gray300};
`;

export const InputContainer = styled.TextInput<InputProps>`
  ${getCustomStyles}
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 5px;
  height: 42px;
  width: 100%;
`;

export const InputError = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.red500};
  font-size: 12px;
  margin-top: 4px;
`;
