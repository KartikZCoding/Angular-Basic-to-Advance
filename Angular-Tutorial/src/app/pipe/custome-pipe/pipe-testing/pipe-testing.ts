import { Component, signal } from '@angular/core';
import { TrimTextPipe } from '../trim-text-pipe';
import { CommonModule } from '@angular/common';
import { CorrencyConvertorPipe } from '../corrency-convertor-pipe';

@Component({
  selector: 'app-pipe-testing',
  imports: [CommonModule, TrimTextPipe, CorrencyConvertorPipe],
  templateUrl: './pipe-testing.html',
  styleUrl: './pipe-testing.css',
})
export class PipeTesting {
  title = signal("Hello Wrold!");
  text = signal("qwertyuiopasdfghjkl");

  amount = signal(144);
}
