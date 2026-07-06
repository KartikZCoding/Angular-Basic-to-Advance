import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-built-in-pipe',
  imports: [CommonModule],
  templateUrl: './built-in-pipe.html',
  styleUrl: './built-in-pipe.css',
})
export class BuiltInPipe {
  title = signal("kartik ahir")
  name = signal("");

  amount = 10000;
  date = new Date(2005, 7, 3);
  mobile="samsung";

  user=signal({name:"Kartik", age:21, email:"kartik@test.com"});
}
