import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/users/'

  constructor( private http: HttpClient) { }

  // GET ALL THE USERS
  getAll(): Observable<User[]>{

    return this.http.get<User[]>(this.baseUrl)
  }
  // GET ONE USER
  getOne(id: string): Observable<User> {

    return this.http.get<User>(this.baseUrl+id)
  }
  // CREATE USER
  create(data: User): Observable<User>{
    return this.http.post<User>(this.baseUrl, data)
  }
  // UPDATING THE USER
  updateOne(data: any, id: any): Observable<any> {
    
    return this.http.put(this.baseUrl + id, data)
  }
  // DELETE ONE USER
  delete(id: any): Observable<any> {

    return this.http.delete(this.baseUrl)
  }


}
