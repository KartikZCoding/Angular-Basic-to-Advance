import { Component } from '@angular/core';
import { Counter } from '../store/counter';

@Component({
  selector: 'app-display-counter',
  imports: [],
  templateUrl: './display-counter.html',
  styleUrl: './display-counter.css',
})
export class DisplayCounter {
  constructor(public state:Counter){}
}
