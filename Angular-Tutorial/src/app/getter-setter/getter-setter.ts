import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-getter-setter',
  imports: [FormsModule],
  templateUrl: './getter-setter.html',
  styleUrl: './getter-setter.css',
})
export class GetterSetter {
  userName = signal("Kartik");
  userDetail = signal({
    name:"Kartik",
    email:"kartik@test.com"
  })

  get uName() {
    return this.userName()
  }

  set uName(val) {
    this.userName.set(val);
  }

  get userDetailName() {
    return this.userDetail().name;
  }

  set userDetailName(val) {
    this.userDetail.update((prev) => ({...prev,name:val}))
  }

  get userEmail() {
    return this.userDetail().email;
  }

  set userEmail(val) {
    this.userDetail.update((prev) => ({...prev,email:val}))
  }
}
