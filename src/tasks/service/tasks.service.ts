import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/auth/entity/user.entity';
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

  getTasks(
    filterDto: GetTasksFilterDto,
    user: UserEntity,
  ): Promise<TaskEntity[]> {
    return this.taskRepository.getTasks(filterDto, user);
  }

  getTaskById(id: string, user: UserEntity): Promise<TaskEntity> {
    return this.taskRepository.getTaskById(id, user);
  }

  createTask(
    createTaskDto: CreateTaskDto,
    user: UserEntity,
  ): Promise<TaskEntity> {
    return this.taskRepository.createTask(createTaskDto, user);
  }

  deleteTask(id: string, user: UserEntity): Promise<void> {
    return this.taskRepository.deleteTask(id, user);
  }

  updateTaskStatus(
    id: string,
    status: TaskStatus,
    user: UserEntity,
  ): Promise<TaskEntity> {
    return this.taskRepository.updateTaskStatus(id, status, user);
  }
}
