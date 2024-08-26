import styled, { DefaultTheme } from 'styled-components/native';

export const Container = styled.View`
  width: 250px;
`;

export const SpanContainer = styled.View`
  flex-direction: row;
  align-self: center;
  margin-top: 24px;
  `;

export const SpanText = styled.Text`
  font-size: 12px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.black};
  font-weight: 600;
`;

export const SpanLink = styled.Text`
  font-size: 12px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.blue500};
  font-weight: bold;
`;
