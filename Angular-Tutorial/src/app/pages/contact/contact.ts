import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  name = signal('');

  constructor(public route: ActivatedRoute){}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.name.set(params['name'])
    })
  }
}
