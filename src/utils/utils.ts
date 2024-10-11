import { AxiosError } from 'axios';
import moment from 'moment';
// import { signOut } from 'next-auth/react';
import { toast } from 'react-hot-toast';


const signOut = () => {
  console.log('You have succesfully sign out')
}

export const handleError = (error: AxiosError) => {
  if (error && error?.status === 401) {
    signOut();
    toast.error('Session expired. Please login again.');
  }
};

export const formatDate = (date: string, format: string) => {
  return moment(date).format(format);
};

export function generateNumberArray(n: string | number): string[] {
  const maxNum = Number.parseInt(`${n}`, 10);
  if (Number.isNaN(maxNum) || maxNum < 1) {
    return [];
  }
  return Array.from({ length: maxNum }, (_, i) => (i + 1).toString());
}
