import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '@example-app/api-interfaces';
import { environment } from 'apps/example-app-web/src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class TodosService {

  constructor(private httpClient: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`./${environment.apiEndpoint}/todos`);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(`./${environment.apiEndpoint}/todos`, todo);
  }
}
