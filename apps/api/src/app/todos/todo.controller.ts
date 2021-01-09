import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiDefaultResponse, ApiNotFoundResponse, ApiTags } from '@nestjs/swagger';
import { DeletedTodo } from './dto/deleted-todo';
import { UpsertTodo } from './dto/upsert-todo';
import { TodoEntity } from './todo.entity';
import { TodoService } from './todo.service';

@ApiTags('todos')
@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @ApiDefaultResponse({
    description: 'Get all the ToDos.',
    type: TodoEntity,
    isArray: true
  })
  @Get('')
  async getTodos(): Promise<TodoEntity[]> {
    return await this.todoService.getTodos();
  }

  @ApiDefaultResponse({
    description: 'Delete the ToDo selected by id.',
    type: DeletedTodo
  })
  @ApiNotFoundResponse({
    description: 'ToDo not found.'
  })
  @Delete(':id')
  async deleteTodo(@Param('id') id: string): Promise<DeletedTodo> {
    const deleted = await this.todoService.deleteTodo(id);
    return { id, deleted };
  }

  @ApiCreatedResponse({
    description: 'The ToDo has been successfully created.',
    type: TodoEntity
  })
  @Post('')
  async addTodo(@Body() todo: UpsertTodo): Promise<TodoEntity> {
    return await this.todoService.addTodo(todo);
  }

  @ApiDefaultResponse({
    description: 'ToDo selected by id successfully updated.',
    type: TodoEntity
  })
  @Patch(':id')
  async updateTodo(
    @Param('id') id: string,
    @Body() todo: UpsertTodo
  ): Promise<TodoEntity> {
    return await this.todoService.updateTodo(id, todo);
  }

  @ApiDefaultResponse({
    description: 'Mark a ToDo as done.',
    type: TodoEntity
  })
  @Patch('markAsDone/:id')
  async markTodoAsDone(@Param('id') id: string): Promise<TodoEntity> {
    return await this.todoService.markTodoAsDone(id);
  }

  @ApiDefaultResponse({
    description: 'Mark a ToDo as not done.',
    type: TodoEntity
  })
  @Patch('markAsNotDone/:id')
  async markTodoAsNotDone(@Param('id') id: string): Promise<TodoEntity> {
    return await this.todoService.markTodoAsNotDone(id);
  }
}
