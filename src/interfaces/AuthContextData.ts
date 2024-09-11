import { User } from "./User";
import { UserWithPassword } from "./UserWithPassword";

export interface AuthContextData {
  user: User | null;
  loading: boolean;
  login: ({ email, password }: Omit<UserWithPassword, "id" | "name">) => Promise<void>;
  logout: () => void;
  updateAuthUser: (updatedUser: User) => Promise<void>;
  isAuthenticated: boolean;
}
