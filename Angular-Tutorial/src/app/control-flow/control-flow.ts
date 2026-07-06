import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isLogin = signal(false);
  show = signal(true);
  status = signal("notStarted")
  users = signal(["Kartik", "Aryan", "Vivek", "Darshit"])
  userDetails = signal([
    {id:1, name:"Kartik", surname:"Ahir", email:"kartik@test.com"},
    {id:2, name:"Aryan", surname:"Nai", email:"aryan@test.com"},
    {id:3, name:"Vivek", surname:"Bhimani", email:"vivek@test.com"},
    {id:4, name:"Darshit", surname:"Parmar", email:"darshit@test.com"},
  ])

  handleLogin(change: boolean) {
    this.isLogin.set(change);
  }

  handleStatus(event: Event) {
    let target = event.target as HTMLSelectElement;
    this.status.set(target.value);
  }
}
