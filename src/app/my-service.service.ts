import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Istock} from './stock';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://localhost:58718/api/Stocks/';
  public data:Istock;
    constructor(private httpClient: HttpClient) {}
  
  getData(id:number):Observable<Istock>{
  return  this.httpClient.get<Istock>(this.apiURL+id);      
    }
  }

