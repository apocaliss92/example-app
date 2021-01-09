import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpsertTodo } from './dto/upsert-todo';
import { TodoEntity } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private todosRepository: Repository<TodoEntity>
  ) {}

  async getTodos(): Promise<TodoEntity[]> {
    return await this.todosRepository.find();
  }

  async deleteTodo(id: string): Promise<boolean> {
    const foundTodo = await this.todosRepository.findOne({ where: { id } });
    if (foundTodo) {
      await this.todosRepository.delete(id);
      return true;
    } else {
      throw new NotFoundException();
    }
  }

  async addTodo(todo: UpsertTodo): Promise<TodoEntity> {
    const result = await this.todosRepository.insert({ ...todo, done: false });
    const id = result.identifiers[0].id;
    if (id) {
      return await this.todosRepository.findOne({
        where: {
          id
        }
      });
    } else {
      throw new InternalServerErrorException();
    }
  }

  async updateTodo(id: string, todo: UpsertTodo): Promise<TodoEntity> {
    return await this.updateTodoBase(id, todo);
  }

  async markTodoAsDone(id: string): Promise<TodoEntity> {
    return await this.updateTodoBase(id, { done: true });
  }

  async markTodoAsNotDone(id: string): Promise<TodoEntity> {
    return await this.updateTodoBase(id, { done: false });
  }

  private async updateTodoBase(id: string, todo: Partial<TodoEntity>) {
    const foundTodo = await this.todosRepository.findOne({ where: { id } });
    if (foundTodo) {
      return this.todosRepository.save({
        ...foundTodo,
        ...todo
      });
    } else {
      throw new NotFoundException();
    }
  }
}
