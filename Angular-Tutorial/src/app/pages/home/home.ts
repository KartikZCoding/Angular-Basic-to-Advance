import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  user = signal({
    id: 1,
    name: 'Kartik',
    age: 21
  })

  constructor(public router: Router) { }

  goToProfile() {
    this.router.navigate(['about'], {
      queryParams: {
        id:3,
        name:'Vivek',
        age:25
      }
    })
  }

  goToContact() {
    this.router.navigate(['contact','Vivek']);
  }
}
