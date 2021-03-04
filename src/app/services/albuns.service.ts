import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbunsService {

  constructor(private http: HttpClient) { }

  getAlbunsLength(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/albums`)
  }
  getAlbuns(page: any, limit: any): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/albums?_page=${page}&_limit=${limit}`)
  }

}
