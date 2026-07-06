import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserJsonService } from '../../services/user-json-service';
import { users } from '../../services/userDataType';

@Component({
  selector: 'app-edit-user',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-user.html',
  styleUrl: './edit-user.css',
})
export class EditUser {

  name = new FormControl('');
  age = new FormControl('');
  email = new FormControl('');

  constructor(private activeRoute: ActivatedRoute, private userService: UserJsonService, private router:Router) { }

  ngOnInit() {
    let id = this.activeRoute.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getUser(id).subscribe((res) => {
        console.log(res);
        this.name.setValue(res.name);
        this.age.setValue(res.age.toString());
        this.email.setValue(res.email);
      })
    }

  }

  editUser() {
    let name = this.name.value;
    let age = this.age.value;
    let email = this.email.value;
    let id = this.activeRoute.snapshot.paramMap.get('id');

    if (name && age && email && id) {
      let data: users = {
        name: name,
        age: Number(age),
        email: email,
        id: Number(id)
      }

      this.userService.editUser(id, data).subscribe((res)=>{
        if(res) {
          this.router.navigate(['/']);
        }
      })
    }
  }
}
