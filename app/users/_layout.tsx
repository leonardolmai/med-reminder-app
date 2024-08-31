import { useAuthRedirect } from "@/hooks/useAuthRedirect";
import { Stack } from "expo-router";

export default function UsersLayout() {
  const isAuthenticated = useAuthRedirect();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="update" options={{ headerShown: false }} />
    </Stack>
  );
}
