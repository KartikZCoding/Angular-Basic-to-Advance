import { Component } from '@angular/core';

@Component({
  selector: 'app-event-handling',
  imports: [],
  templateUrl: './event-handling.html',
  styleUrl: './event-handling.css',
})
export class EventHandling {
  count = 0;
  counter(action: string) {
    if (action === 'plus') {
      this.count++
    } else {
      this.count > 0 && this.count--
    }
  }

  eventName = "";

  eventHandler(action:string) {
    console.log(action);
    this.eventName = action;
  }
}
