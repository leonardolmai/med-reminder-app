import { screenHeight } from "@/utils/dimensions";
import { MedicationHistoryList, MedicationsHistoryContainer, Title, TitleContainer } from "./index.styles"
import { MedicationHistoryItem } from "@/components/MedicationHistoryItem";
import { MedicationHistory } from "@/interfaces/MedicationHistory";
import { useMedications } from "@/hooks/useMedications";

export default function MedicationsHistory() {
  const { medicationHistory } = useMedications();

  // useEffect(() => {
  //   fetchMedicationHistory();
  // }, []);

  return (
    <MedicationsHistoryContainer style={{ minHeight: medicationHistory.length > 6 ? screenHeight - 130 : screenHeight }}>
      <TitleContainer>
        <Title>Histórico</Title>
      </TitleContainer>
      <MedicationHistoryList
        data={medicationHistory}
        renderItem={({ item }: { item: MedicationHistory }) => <MedicationHistoryItem medicationHistory={item} />}
        keyExtractor={(item: MedicationHistory) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </MedicationsHistoryContainer>
  );
}
