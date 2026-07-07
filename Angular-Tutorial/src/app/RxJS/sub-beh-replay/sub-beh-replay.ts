import { Component, inject, NgModule, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SimpleService } from '../service/simple-service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-sub-beh-replay',
  imports: [FormsModule],
  templateUrl: './sub-beh-replay.html',
  styleUrl: './sub-beh-replay.css',
})
export class SubBehReplay implements OnInit{

  studentName$ = new Subject();

  rollNo$ = new Subject<number>();

  takeTill = new Subject<void>();

  courseName: Subject<string> = new Subject<string>();

  // initSubject = new Subject("ABC"); //wrong

  userSrv = inject(SimpleService);

  userId:number = 0;

  constructor() {

    setTimeout(() => {
      this.studentName$.next("Angular 20");
      this.rollNo$.next(123);
      this.takeTill.next();
      this.userSrv.$courseDuration.next("3 month")
    }, 4000);

    this.userSrv.$roleBehaviour.subscribe((res:string) => {
      // debugger
    })
    this.userSrv.$roleSub.subscribe((res:string) => {
      // debugger
    })
  }

  ngOnInit(): void {

    this.userSrv.$courseDuration.subscribe((res:any)=> {
      console.log(res);
      
    })

    this.studentName$.subscribe((res:any)=> {
      console.log(res);
    })
    this.rollNo$.subscribe((res:any)=> {
      console.log(res);
    })
  }

  onRoleChange(event: any) {
    // debugger
    this.userSrv.$roleBehaviour.next(event.target.value);
    this.userSrv.$roleSub.next(event.target.value);
  }

  getUser() {
    this.userSrv.getUserById(this.userId).subscribe((res:any)=>{
      debugger
    })
  } 

}
