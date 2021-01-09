import { Version as VersionDto } from 'apps/api/src/app/dto/version';
import { UpsertTodo as UpsertTodoDto } from 'apps/api/src/app/todos/dto/upsert-todo';
import { TodoEntity } from 'apps/api/src/app/todos/todo.entity';

export type Todo = TodoEntity;
export type UpsertTodos = UpsertTodoDto;
export type Version = VersionDto;
