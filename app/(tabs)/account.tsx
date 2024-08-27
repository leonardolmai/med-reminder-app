import { AccountContainer, AccountOptionsContainer, Email, Name, Title, TitleContainer, UserInformationContainer } from "./index.styles";
import { screenHeight } from "@/utils/dimensions";
import { AccountOption } from "@/components/AccountOption";
import { router } from "expo-router";
import { User } from "@/interfaces/User"

export default function Account() {
  const user: User = {
    id: 1,
    name: "Leonardo",
    email: "leonardo@example.com",
  };

  const accountOptions = [1, 2];

  const onLogout = () => {
    router.push('/');
  }

  const onEditPersonalInformation = () => {
    router.push('/users/update');
  }

  return (
    <AccountContainer style={{ minHeight: accountOptions.length > 5 ? screenHeight - 130 : screenHeight }}>
      <TitleContainer>
        <Title>Conta</Title>
      </TitleContainer>
      <UserInformationContainer>
        <Name>{user.name}</Name>
        <Email>{user.email}</Email>
      </UserInformationContainer>
      <AccountOptionsContainer>
        <AccountOption onPress={onEditPersonalInformation}>Editar informações pessoais</AccountOption>
        <AccountOption isButtonLogout={true} onPress={onLogout}>Sair</AccountOption>
      </AccountOptionsContainer>
    </AccountContainer>
  );
}
