import { DefaultTheme } from "styled-components/native";
import styled from "styled-components/native";

export const Container = styled.View`
`;

export const TopContainer = styled.View`
  margin: 48px 32px 32px 32px;
  align-items: flex-start;
  gap: 20px;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.blue900};
`;
