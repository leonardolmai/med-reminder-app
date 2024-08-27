import styled, { DefaultTheme } from "styled-components/native";
import { AccountOptionProps } from "@/interfaces/AccountOptionProps";
import { AccountOptionTextProps } from "@/interfaces/AccountOptionTextProps";

export const AccountOptionContainer = styled.TouchableOpacity<AccountOptionProps>`
  border: 1px solid ${({ theme }: { theme: DefaultTheme }) => theme.colors.gray300};
  padding: 10px 20px;
  border-radius: 16px;
  margin-top: 16px;
  width: 100%;
  height: 64px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AccountOptionText = styled.Text<AccountOptionTextProps>`
  color: ${({ theme, isButtonLogout }: { theme: DefaultTheme } & AccountOptionTextProps) => isButtonLogout ? theme.colors.red700 : theme.colors.black};
  font-size: 14px;
`;
