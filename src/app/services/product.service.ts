import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getPostsLength(): Observable<any> { 
    return this.http.get<any>(`${environment.baseUrl}/posts`)
  }
  getPosts(page:any,limit:any): Observable<any> { 
    return this.http.get<any>(`${environment.baseUrl}/posts?_page=${page}&_limit=${limit}`)
  }


}
