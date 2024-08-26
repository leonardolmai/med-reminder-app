import { TextInputProps } from "react-native";

export interface InputProps extends TextInputProps {
  // placeholderText: string;
  error?: boolean;  
  errorMessage?: string;
  isValid?: boolean; 
}
