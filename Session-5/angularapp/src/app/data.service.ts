import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserClass } from './UserClass';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  //link:https://jsonplaceholder.typicode.com/users

  url:string="https://jsonplaceholder.typicode.com/users";

  //DI
  constructor(private http:HttpClient) { }

  getAllUsers():Observable<UserClass[]>{
    return this.http.get<UserClass[]>(this.url);
  }
}
