import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuidv4 } from 'uuid';
import { ApiSuccessModel } from './api.response.model';
@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): ApiSuccessModel {
    const response: ApiSuccessModel = {
      status: true,
      message: 'Successfully fetched',
      data: this.tasks,
    };
    return response;
  }

  createTask(title: string, description: string): ApiSuccessModel {
    const task: Task = {
      id: uuidv4(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    var success: ApiSuccessModel = {
      status: true,
      message: 'success',
      data: task,
    };
    this.tasks.push(task);
    return success;
  }
}
