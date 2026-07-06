import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrls: ['./reactive-form.css'],
})
export class ReactiveForm {
  email = new FormControl("");
  password = new FormControl("");

  handleLogin() {
    console.log("Email : "+this.email.value+" Password : "+this.password.value)
  }

  handleReset() {
    this.email.setValue("");
    this.password.setValue("");
  }
}
