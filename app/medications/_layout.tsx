import { MedicationProvider } from "@/contexts/MedicationContext";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";
import { Stack } from "expo-router";

export default function MedicationsLayout() {
  const isAuthenticated = useAuthRedirect();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <MedicationProvider>
      <Stack>
        <Stack.Screen name="[id]" options={{ headerShown: false }} />
        <Stack.Screen name="create" options={{ headerShown: false }} />
        <Stack.Screen name="update/[id]" options={{ headerShown: false }} />
      </Stack>
    </MedicationProvider>
  );
}
