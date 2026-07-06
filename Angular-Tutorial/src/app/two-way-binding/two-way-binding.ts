import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  imports: [FormsModule],
  templateUrl: './two-way-binding.html',
  styleUrl: './two-way-binding.css',
})
export class TwoWayBinding {
  name = signal("Kartik");
  age = 20;
  userDetail = signal({
    name:"Kartik",
    age:21,
    email:"kartik@test.com",
  })

  updateUserDetail(key:string, val:string) {
    this.userDetail.update((prev) => ({...prev,[key]:val}))
  }
}
