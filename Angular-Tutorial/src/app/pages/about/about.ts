import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  id = signal(0);
  name = signal('');
  age = signal(0);

  constructor(public route: ActivatedRoute) { }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.id.set(params['id']);
      this.name.set(params['name']);
      this.age.set(params['age']);
    })
  }
}
