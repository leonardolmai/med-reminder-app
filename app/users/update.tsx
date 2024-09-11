import { Container, Title, TopContainer } from "./index.styles";
import { IconButton } from "@/components/IconButton";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { router } from "expo-router";
import { UpdateUserInfoForm } from "@/components/UpdateUserInfoForm";

export default function UpdateUser() {
  const theme = useTheme();

  const onGoBack = () => {
    router.back();
  }

  return (
    <Container>
      <TopContainer>
        <IconButton onPress={onGoBack}><Ionicons name="arrow-back" size={32} color={theme.colors.black} /></IconButton>
        <Title>Editar informações</Title>
      </TopContainer>
      <UpdateUserInfoForm />
    </Container>
  );
}
