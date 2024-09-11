import { User } from "@/interfaces/User";

export interface UserWithPassword extends User {
  password: string;
}
