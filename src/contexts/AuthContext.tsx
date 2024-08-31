import { createContext, useState, useEffect } from 'react';
import { User } from '@/interfaces/User';
import { loginService } from '@/services/auth';
import { UserWithPassword } from '@/interfaces/UserWithPassword';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { AuthProviderProps } from '@/interfaces/AuthProviderProps';
import { AuthContextData } from '@/interfaces/AuthContextData';

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        router.replace("(tabs)");
      }
      setLoading(false);
    }

    loadUser();
  }, []);

  async function login({ email, password }: Omit<UserWithPassword, "id" | "name">): Promise<void> {
    try {
      const user = await loginService({ email, password });
      setUser(user);
      await AsyncStorage.setItem("user", JSON.stringify(user));
      router.replace('(tabs)');
    } catch (error) {
      throw error;
    }
  }

  async function logout() {
    await AsyncStorage.clear();
    setUser(null);
    router.replace('/');
  };

  async function updateAuthUser(updatedUser: User): Promise<void> {
    setUser(updatedUser);
    await AsyncStorage.setItem("user", JSON.stringify(updatedUser));
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, updateAuthUser, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
