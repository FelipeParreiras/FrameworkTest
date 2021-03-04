import { HeaderData } from './../components/template/header/header-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
 private _headerData = new BehaviorSubject<HeaderData>({
    title:'Aplicação Framework',
    icon: 'home',
    routeUrl:''
  })
  constructor() { }

  get headerData(): HeaderData{
    return this._headerData.value
  }
  set headerData(headerData: HeaderData){
    this._headerData.next(headerData)
  }
}
