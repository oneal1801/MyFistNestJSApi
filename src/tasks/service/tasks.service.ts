import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from '../dto/create-task.dto';
import { GetTasksFilterDto } from '../dto/get-tasks-filter.dto';
import { TaskEntity } from '../entity/task.entity';
import { TaskRepository } from '../repository/task.repository';
import { TaskStatus } from '../task-status.enum';

@Injectable()
export class TasksService {
  /**
   *
   */
  constructor(
    @InjectRepository(TaskRepository)
    private readonly taskRepository: TaskRepository,
  ) {}

  getTasks(filterDto: GetTasksFilterDto): Promise<TaskEntity[]> {
    return this.taskRepository.getTasks(filterDto);
  }

  getTaskById(id: string): Promise<TaskEntity> {
    return this.taskRepository.getTaskById(id);
  }

  createTask(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    return this.taskRepository.createTask(createTaskDto);
  }

  deleteTask(id: string): Promise<void> {
    return this.taskRepository.deleteTask(id);
  }

  updateTaskStatus(id: string, status: TaskStatus): Promise<TaskEntity> {
    return this.taskRepository.updateTaskStatus(id, status);
  }
}
