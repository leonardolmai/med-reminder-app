import { screenHeight, screenWidth } from "@/utils/dimensions";
import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.white};
  align-items: center;
  /* justify-content: center; */
`;

export const Logo = styled.Image`
  margin-top: ${screenHeight * 0.08}px;
  max-width: ${screenWidth * 0.5}px;
  max-height: ${screenHeight * 0.18}px;
  /* height: 150px; */
  /* max-height: 150px; */
`;

export const Title = styled.Text`
  font-size: 36px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.blue900};
  /* font-weight: bold; */
  line-height: 32px;
  width: ${screenWidth * 0.5}px;
  text-align: center;
  margin-bottom: 32px;
  /* font-family: 'Roboto'; */
`;
