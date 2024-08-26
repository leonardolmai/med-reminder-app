import { screenHeight } from "@/utils/dimensions";
import { MedicationHistoryList, MedicationsHistoryContainer, Title, TitleContainer } from "./index.styles"
import { MedicationHistoryItem } from "@/components/MedicationHistoryItem";
import { MedicationHistory } from "@/interfaces/MedicationHistory";
import { medicationsHistory } from "@/utils/medications";

export default function MedicationsHistory() {
  return (
    <MedicationsHistoryContainer style={{ minHeight: medicationsHistory.length > 6 ? screenHeight - 130 : screenHeight }}>
      <TitleContainer>
        <Title>Histórico</Title>
      </TitleContainer>
      <MedicationHistoryList
        data={medicationsHistory}
        renderItem={({ item }: { item: MedicationHistory }) => <MedicationHistoryItem medicationHistory={item} />}
        keyExtractor={(item: MedicationHistory) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </MedicationsHistoryContainer>
  );
}
