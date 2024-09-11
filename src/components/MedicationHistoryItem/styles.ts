import { DefaultTheme } from "styled-components/native";
import styled from "styled-components/native";
import { MedicationHistoryItemProps } from "@/interfaces/MedicationHistoryItemProps";

export const MedicationHistoryItemContainer = styled.View<MedicationHistoryItemProps>`
  width: 100%;
  height: 80px;
  background-color : ${({ theme }: { theme: DefaultTheme }) => theme.colors.white};
  border: 1px solid ${({ theme }: { theme: DefaultTheme }) => theme.colors.gray300};
  padding: 12px 16px;
  margin-bottom: 16px;
  border-radius: 16px;
  justify-content: space-between;
`;

export const MedicationHistoryItemContainerTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Name = styled.Text`
  font-size: 18px;
`;

export const MedicationHistoryItemContainerBottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Time = styled.Text`
  font-size: 12px;
`;

export const MedicationDate = styled.Text`
  font-size: 12px;
`;
