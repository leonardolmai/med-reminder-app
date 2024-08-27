import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
`;

export const TopContainer = styled.View`
  margin: 48px 32px 32px 32px;
  align-items: flex-start;
  gap: 20px;
`;

export const ButtonContainer = styled.View`
  margin: 0 32px;
`;

export const Name = styled.Text`
  font-size: 28px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.blue900};
`;

export const Dosage = styled.Text`
  font-size: 20px;
  margin-top: 32px;
`;

export const Frequency = styled.Text`
  font-size: 20px;
  margin-top: 32px;
`;

export const SchedulesContainer = styled.View`
  margin-top: 32px;
  margin-right: auto;
  margin-left: auto;
`;

export const Schedule = styled.View`
  margin-top: 16px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.gray100};
  border: 1px solid ${({ theme }: { theme: DefaultTheme }) => theme.colors.gray300};
  padding: 16px 32px;
  height: 56px;
  align-items: center;
`;

export const Time = styled.Text`
  font-size: 14px;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: ${({ theme }: DefaultTheme) => theme.colors.blue900};
`;
