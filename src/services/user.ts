import { User } from "@/interfaces/User";
import { UserWithPassword } from "@/interfaces/UserWithPassword";
import { api } from "@/utils/api";
import { handleError } from "@/utils/handleError";
import { AxiosResponse } from "axios";

export function removePassword(user: UserWithPassword): User {
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

export async function createUser(data: Omit<UserWithPassword, "id">): Promise<User> {
  try {
    const existingUser = await getUserByEmail(data.email);

    if (existingUser) {
      console.log('User already exists');
      return existingUser;
    }

    const response: AxiosResponse<UserWithPassword> = await api.post('/users', data);
    return removePassword(response.data);
  } catch (error) {
    handleError(error);
    throw error;
  }
}

export async function getUser(id: string): Promise<UserWithPassword | null> {
  try {
    const response: AxiosResponse<UserWithPassword> = await api.get(`/users/${id}`);

    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error) {
    handleError(error);
    throw error;
  }
}

export async function getUserByEmail(email: string): Promise<UserWithPassword | null> {
  try {
    const response: AxiosResponse<UserWithPassword[]> = await api.get(`/users?email=${email}`);

    if (Array.isArray(response.data) && response.data.length > 0) {
      return response.data[0];
    }
    return null;
  } catch (error) {
    handleError(error);
    throw error;
  }
}

export async function updateUser(data: User): Promise<User | null> {
  try {
    const existingUser = await getUser(data.id);

    if (existingUser) {
      console.log('User already exists');
      const updatedUser = { ...existingUser, name: data.name };
      const response: AxiosResponse<UserWithPassword> = await api.put(`/users/${existingUser.id}`, updatedUser);
      return removePassword(response.data);
    }
    return null;
  } catch (error) {
    handleError(error);
    throw error;
  }
}
