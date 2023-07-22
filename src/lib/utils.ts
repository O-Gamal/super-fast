import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDate(date: Date): string {
  const yyyy = date.getFullYear();
  const month = date.getMonth() + 1; // Months start at 0!
  const day = date.getDate();

  let mm = month.toString();
  let dd = day.toString();

  if (month < 10) dd = '0' + dd;
  if (day < 10) mm = '0' + mm;

  return `${dd}/${mm}/${yyyy}`;
}

export function formatDate(input: string): string {
  const [year, month, day] = input.includes('-')
    ? input.split('-')
    : input.split('/');

  const date = new Date(`${year}-${month}-${day}`);
  return date.toLocaleDateString('en-GB', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function toHoursAndMinutes(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return { hours, minutes };
}
