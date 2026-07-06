import { Component, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { Users } from '../../pages/users/users';
import { users } from '../../services/userDataType';
import { UserJsonService } from '../../services/user-json-service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  userData = signal<users[] | undefined>(undefined)
  constructor(private userService: UserJsonService, private router:Router) { }
  ngOnInit() {
    this.getUser()
  }

  getUser() {
    this.userService.getUsers().subscribe((data) => {
      this.userData.set(data);
    })
  }

  deleteUser(id: number | undefined) {
    if (id) {
      this.userService.deleteUser(id).subscribe((res) => {
        if (res) {
          this.getUser();
        }
      })
    }
  }

  editUser(id: number | undefined) {
    this.router.navigate(['/edit',id])
  }

}
