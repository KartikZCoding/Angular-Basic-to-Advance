import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-structure-directive',
  imports: [CommonModule],
  templateUrl: './structure-directive.html',
  styleUrl: './structure-directive.css',
})
export class StructureDirective {
  isLogin = signal(false);
  users = signal(["Kartik", "Aryan", "Darshit", "Vivek"]);
  color = "";
}
