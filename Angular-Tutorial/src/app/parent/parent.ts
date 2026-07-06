import { Component, signal } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  userName = signal("Kartik Ahir");
  users = signal(["Kartik", "Aryan", "Darshit", "Vivek"])
  user = signal('');
  selectedUserName = signal('');

  handleAddUser() {
    if (this.user()) {
      this.users.update((prev) => ([...prev, this.user()]))
      this.user.set('');
    }
  }

  selectedUser(name: string) {
    this.selectedUserName.set(name);
  }

  deleteUser(name: string) {
    this.users.update((users)=>(users.filter(user => user!=name)))
    if (this.userName() === name) {
      this.userName.set('');
    }
  }
}
