import styled, { DefaultTheme } from "styled-components/native";
import { FlatListProps } from "react-native";
import { Medication } from "@/interfaces/Medication";
import { MedicationHistory } from "@/interfaces/MedicationHistory";

export const MedicationsContainer = styled.View`
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.white};
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 48px 32px 32px 32px;
`;

export const Title = styled.Text`
  font-size: 32px;
`;

export const MedicationList = styled.FlatList<FlatListProps<Medication>>`
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 130px;
  /* estimated height to top of tab bar */
`;

export const MedicationsHistoryContainer = styled.View`
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.white};
`;

export const MedicationHistoryList = styled.FlatList<FlatListProps<MedicationHistory>>`
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 130px;
  /* estimated height to top of tab bar */
`;

export const AccountContainer = styled.View`
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.white};
`;

export const UserInformationContainer = styled.View`
  margin: 0 32px;
`;

export const Name = styled.Text`
  font-size: 24px;
`;

export const Email = styled.Text`
  font-size: 14px;
`;

export const AccountOptionsContainer = styled.View`
  margin: 0 32px;
`;
