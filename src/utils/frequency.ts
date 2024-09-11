import { frequencyOptions } from '@/constants/frequencyOptions';

export function getFrequencyLabel(value: string): string {
  const option = frequencyOptions.find(option => option.value === value);
  return option ? option.label : value;
}
