import { IconButton } from "@/components/IconButton";
import { TitleContainer, Title, MedicationList, MedicationsContainer } from "./index.styles";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { MedicationItem } from "@/components/MedicationItem";
import { screenHeight } from "@/utils/dimensions";
import { router } from "expo-router";
import { useMedications } from "@/hooks/useMedications";
import { MedicationHistory } from "@/interfaces/MedicationHistory";

export default function Medications() {
  const theme = useTheme();
  const { medications } = useMedications();

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
        renderItem={({ item }: { item: MedicationHistory }) => <MedicationItem medicationHistory={item} />}
        keyExtractor={(item: MedicationHistory) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </MedicationsContainer>
  );
}
