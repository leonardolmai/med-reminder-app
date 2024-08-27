import { DefaultTheme } from "styled-components/native";
import styled from "styled-components/native";
import { MedicationItemProps } from "@/interfaces/MedicationItemProps";

export const MedicationItemContainer = styled.TouchableOpacity<MedicationItemProps>`
  width: 100%;
  height: 100px;
  background-color : ${({ theme }: { theme: DefaultTheme }) => theme.colors.white};
  border: 1px solid ${({ theme }: { theme: DefaultTheme }) => theme.colors.gray300};
  padding: 12px 16px;
  margin-bottom: 16px;
  border-radius: 16px;
  justify-content: space-between;
`;

export const MedicationItemContainerTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Name = styled.Text`
  font-size: 18px;
`;

export const MedicationItemContainerBottom = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Time = styled.Text`
  font-size: 12px;
`;

export const Dosage = styled.Text`
  font-size: 12px;
`;

export const ActionButtons = styled.View`
  flex-direction: row;
`;
