import { Task } from './task.model';

type Answer<T> = T | T[];

export interface ApiSuccessModel {
  status: boolean;
  message: string;
  data: Answer<Task>;
}

export interface ApiFailureModel {
  status: boolean;
  message: string;
  error: string;
}
