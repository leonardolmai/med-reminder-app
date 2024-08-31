import { User } from "@/interfaces/User";
import { UserWithPassword } from "@/interfaces/UserWithPassword";
import { createUser, getUserByEmail, removePassword } from "@/services/user";

export async function signupService(data: Omit<UserWithPassword, "id">): Promise<User> {
  try {
    return await createUser(data);
  } catch (error) {
    throw error;
  }
}

export async function loginService({ email, password }: Omit<UserWithPassword, "id" | "name">): Promise<User> {
  try {
    const user = await getUserByEmail(email);

    if (!user) {
      throw new Error('User not found');
    }
    if (password !== user.password) {
      throw new Error('Invalid password');
    }

    return removePassword(user);
  } catch (error) {
    throw error;
  }
}
