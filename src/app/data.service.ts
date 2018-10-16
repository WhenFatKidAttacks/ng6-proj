import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable }   from 'rxjs';
import { Data } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

 /* getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }*/

  getUsers(): Observable<Data[]> {
    return this.http.get<Data[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUser(userId){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId);
  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
