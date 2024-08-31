import { useAuth } from '@/hooks/useAuth';
import { router } from 'expo-router';
import { useEffect } from 'react';

export function useAuthRedirect() {
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/');
    }
  }, [isAuthenticated, router]);

  return isAuthenticated;
};
