import { Accept } from 'react-dropzone';

export const maxSize: number = 20 * 1024 * 1024;

export const accept: Accept = {
  'image/png': ['.png', '.PNG'],
  'image/jpg': ['.jpg', '.JPG'],
  'image/jpeg': ['.jpeg', '.JPEG'],
};
