import { Injectable } from '@angular/core';
import { email } from '@angular/forms/signals';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userList() {
    return [
      {
        id:1,name:'Kartik',email:'kartik@test.com',city:'Surat'
      },
      {
        id:2,name:'Aryan',email:'aryan@test.com',city:'Ahmdedabad'
      },
      {
        id:3,name:'Vivek',email:'vivek@test.com',city:'Rajkot'
      },
      {
        id:4,name:'Darshit',email:'darshit@test.com',city:'Bhavnagar'
      },
      {
        id:5,name:'Meet',email:'meet@test.com',city:'Ahmdedabad'
      }
    ]
  }
}
