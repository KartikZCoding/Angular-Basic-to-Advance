import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {

  userDetails:any = undefined
  addUser(data: NgForm) {
    console.log(data);
    this.userDetails = data;
  }

  reset(form: NgForm) {
    form.reset();
    this.userDetails = undefined;
  }
}
