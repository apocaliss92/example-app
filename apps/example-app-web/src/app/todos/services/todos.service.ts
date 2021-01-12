import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo, UpsertTodo } from '@example-app/api-interfaces';
import { environment } from 'apps/example-app-web/src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class TodosService {

  constructor(private httpClient: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`./${environment.apiEndpoint}/todos`);
  }

  addTodo(todo: UpsertTodo): Observable<Todo> {
    return this.httpClient.post<Todo>(`./${environment.apiEndpoint}/todos`, todo);
  }

  updateTodo(id: string, todo: UpsertTodo): Observable<Todo> {
    return this.httpClient.patch<Todo>(`./${environment.apiEndpoint}/todos/${id}`, todo);
  }

  deleteTodo(id: string): Observable<void> {
    return this.httpClient.delete<void>(`./${environment.apiEndpoint}/todos/${id}`);
  }

  markAsDone(id: string): Observable<Todo> {
    return this.httpClient.patch<Todo>(`./${environment.apiEndpoint}/todos/markAsDone${id}`, undefined);
  }

  markAsNotDone(id: string): Observable<Todo> {
    return this.httpClient.patch<Todo>(`./${environment.apiEndpoint}/todos/markAsNotDone${id}`, undefined);
  }
}
