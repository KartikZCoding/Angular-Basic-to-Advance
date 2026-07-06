import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email, validate } from '@angular/forms/signals';

@Component({
  selector: 'app-form-grouping',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-grouping.html',
  styleUrl: './form-grouping.css',
})
export class FormGrouping {
  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  })

  get name() {
    return this.loginForm.get("name");
  }
  get email() {
    return this.loginForm.get("email");
  }
  get password() {
    return this.loginForm.get("password");
  }

  handleProfile() {
    console.log(this.loginForm.value);
  }
}
