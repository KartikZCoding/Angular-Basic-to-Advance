import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserJsonService } from '../../services/user-json-service';
import { users } from '../../services/userDataType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {
  name = new FormControl('');
  age = new FormControl('');
  email = new FormControl('');

  constructor(private userService: UserJsonService, private router:Router) { }

  addUser() {
    let name = this.name.value;
    let age = this.age.value;
    let email = this.email.value;

    if (name && age && email) {
      let data: users = {
        name: name,
        age: Number(age),
        email: email
      }

      this.userService.addUser(data).subscribe((res)=> {
        if(res) {
          this.router.navigate(['/']);
        }
      })
    }

  }
}
