import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiSuccessModel } from './api.response.model';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get()
  getAllTasks(): ApiSuccessModel {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ): ApiSuccessModel {
    console.log(title, description);
    return this.tasksService.createTask(title, description);
  }
}
