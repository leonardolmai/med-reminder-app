import styled, { DefaultTheme } from "styled-components/native";

export const StyledErrorText = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.red500};
  font-size: 12px;
  margin-top: 4px;
`;
