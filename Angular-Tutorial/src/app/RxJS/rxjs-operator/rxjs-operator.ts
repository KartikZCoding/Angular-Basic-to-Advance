import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { filter, from, interval, map, of, take } from 'rxjs';
import { SimpleService } from '../service/simple-service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-rxjs-operator',
  imports: [ReactiveFormsModule],
  templateUrl: './rxjs-operator.html',
  styleUrl: './rxjs-operator.css',
})
export class RxjsOperator {

  noList$ = from([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

  rollNoList$ = of([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

  timeInterval$ = interval(1000);

  simpleService = inject(SimpleService)

  searchControl = new FormControl();

  constructor() {

    this.timeInterval$.pipe(
      take(6)
    ).subscribe((res : number)=> {
      console.log(res);
    })

    // this.searchControl.valueChanges.pipe(
    //   filter(searchText => searchText.length > 3)
    // ).subscribe((res:string)=> {
    //   console.log(res); 
    // })

    // this.timeInterval$.pipe(
    //   filter(num => num % 2 == 0)
    // ).subscribe((res : number)=> {
    //   console.log(res);
    // })

    // this.simpleService.getJsonUser().subscribe((res) => {
    //   console.log(res);
    // })

    // this.simpleService.getSingleUser().subscribe((res) => {
    //   console.log(res);
    // })

    // this.noList$.pipe(
    //   filter(num => num % 2 == 0)
    // ).subscribe((res:number)=> {
    //   console.log(res);
    // })

    // this.noList$.subscribe(res => {
    //   console.log(res);
    // })

    // this.rollNoList$.pipe(
    //   map(result => result.filter(val => val % 2 == 0))
    // ).subscribe(res => {
    //   console.log(res);
    // })
  }

}
