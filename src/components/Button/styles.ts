import styled, { DefaultTheme } from "styled-components/native";
import { ButtonProps } from "@/interfaces/ButtonProps";

const getCustomStyles = (props: ButtonProps & { theme: DefaultTheme }) => `
  background-color: ${props.backgroundColor || props.theme.colors.blue500};
`;

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  ${getCustomStyles}
  padding: 10px 20px;
  border-radius: 5px;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 42px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.white};
  font-size: 14px;
  font-weight: bold;
`;
