import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable }   from 'rxjs';
import { Data } from './data.model';
import { Vendor } from 'src/assets/data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _url:string = "/assets/data/data.json";

  constructor(private http:HttpClient) { }

  getUsers(): Observable<Data[]> {
    return this.http.get<Data[]>(this._url);
  }

  getUser(userId){
  //   console.log(userId);
  //  return this.http.get<Data[]>(this._url).pipe(
  //    data => this.test = data
  //   );
    return Vendor.find(x => x.id == userId);
  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
