import { IconButton } from "@/components/IconButton";
import { TitleContainer, Title, MedicationList, MedicationsContainer } from "./index.styles";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { MedicationItem } from "@/components/MedicationItem";
import { screenHeight } from "@/utils/dimensions";
import { router } from "expo-router";
import { Medication } from "@/interfaces/Medication";
import { medications } from "@/utils/medications";

export default function Medications() {
  const theme = useTheme();

  const handlePressOnCreateButton = () => {
    router.push('/medications/create');
  }

  return (
    <MedicationsContainer style={{ minHeight: medications.length > 5 ? screenHeight - 130 : screenHeight }}>
      <TitleContainer>
        <Title>Medicamentos</Title>
        <IconButton onPress={handlePressOnCreateButton}><Ionicons name="add-circle" size={48} color={theme.colors.blue500} /></IconButton>
      </TitleContainer>
      <MedicationList
        data={medications}
        renderItem={({ item }: { item: Medication }) => <MedicationItem medication={item} />}
        keyExtractor={(item: Medication) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </MedicationsContainer>
  );
}
