import styled, { DefaultTheme } from "styled-components/native";
import { ViewProps } from "react-native";

export const LoadingContainer = styled.View<ViewProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.white};
`;

