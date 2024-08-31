import { isAxiosError } from "axios";

export function handleError(error: unknown): void {
  if (isAxiosError(error)) {
    console.log('Error response data:', error.response?.data);
  } else {
    console.log('Unexpected error:', error);
  }
}
