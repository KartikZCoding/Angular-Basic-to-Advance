import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { users } from './userDataType';

@Injectable({
  providedIn: 'root',
})
export class UserJsonService {
  url = "http://localhost:3000/users"
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<users[]>(this.url);
  }

  getUser(id: string) {
    return this.http.get<users>(`${this.url}/${id}`);
  }

  addUser(data: users) {
    return this.http.post<users>(this.url, data)
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  editUser(id: string, data: users) {
    return this.http.put(`${this.url}/${data.id}`, data);
  }
}
