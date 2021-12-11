import { Images } from './image';

export interface ICrew {
  name?: string;
  images?: Images;
  role?: string;
  bio?: string;
}