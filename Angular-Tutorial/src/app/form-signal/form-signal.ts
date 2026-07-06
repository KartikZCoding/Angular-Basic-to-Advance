import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { email, form, FormField, maxLength, minLength, required } from '@angular/forms/signals';

@Component({
  selector: 'app-form-signal',
  standalone: true,
  imports: [CommonModule, FormField],
  templateUrl: './form-signal.html',
  styleUrls: ['./form-signal.css'],
})
export class FormSignal {
  loginModel = signal({
    email: '',
    password: ''
  })
  loginForm = form(this.loginModel, (field) => {
    required(field.email, {message:"Email is required!"})
    email(field.email, {message:"Enter valid email!"})
    required(field.password, {message:"Password is required!"})
    minLength(field.password,5, {message:"Enter valid password!"})
    maxLength(field.password,10, {message:"Enter valid password!"})
  });

  login() {
    console.log(this.loginForm.email().value());
    console.log(this.loginForm.password().value());
  }
  reset() {
    this.loginForm.email().value.set('');
    this.loginForm.password().value.set('');
  }
}
