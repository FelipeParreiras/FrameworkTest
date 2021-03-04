import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http:HttpClient) { }

  getTodosLength(params:any): Observable<any>{
    if (params == 'todas') {return this.http.get<any>(`${environment.baseUrl}/todos`)} 
    else {return this.http.get<any>(`${environment.baseUrl}/todos?completed=${params}`)}
  }
  getTodos(params:any,page:any,limit:any): Observable<any>{
    if (params == 'todas') {return this.http.get<any>(`${environment.baseUrl}/todos?_page=${page}&_limit=${limit}`)} 
    else {return this.http.get<any>(`${environment.baseUrl}/todos?completed=${params}&_page=${page}&_limit=${limit}`)}
  }
}
