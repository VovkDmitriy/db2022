import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Insects } from '../interfaces/insects';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  url:string="http://localhost:8070/lab1.1/Servlet1"

  constructor(private http:HttpClient) { }

  getInsects():Observable<Insects[]>{
    return this.http.get<Insects[]>(this.url); 
  }
}
