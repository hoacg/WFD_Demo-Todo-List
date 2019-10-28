import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from './Todo';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getTodoList(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.apiUrl);
  }

  getTodoDetail(id: number) {
    return this.httpClient.get<Todo[]>( this.apiUrl + '/' + id);
  }


}
