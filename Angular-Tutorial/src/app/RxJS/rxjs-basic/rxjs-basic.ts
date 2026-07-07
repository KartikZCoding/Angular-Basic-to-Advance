import { Component, resource } from '@angular/core';
import { from, interval, Observable, of, timer } from 'rxjs';

@Component({
  selector: 'app-rxjs-basic',
  imports: [],
  templateUrl: './rxjs-basic.html',
  styleUrl: './rxjs-basic.css',
})
export class RxjsBasic {

  //simple property not reactive
  cityList: string[] = ["Pune", "Mumbai", "Ahmedabad"];

  //observable reactive
  //values take at once
  cityList$ = of(["Pune", "Mumbai", "Ahmedabad"]);

  //values take at one by one
  cityList2$ = from(["Pune", "Mumbai", "Ahmedabad"]);

  myInterval$ = interval(1000);

  timer$ = timer(5000);


  constructor() {

    this.timer$.subscribe(res=> {
      console.log("Timer Executed");
      
    })

    this.myInterval$.subscribe((res:number)=> {
      console.log(`Interval : ${res}`);
      
    })

    this.cityList$.subscribe((cityData: string[])=> {
      console.log(cityData);
    })

    this.cityList2$.subscribe((res:string)=> {
      console.log(res);
    })

    const myObs$ = new Observable(value => {
      value.next("This is Demo Text")
    });

    myObs$.subscribe((message)=>{
      console.log(message);
    })
  }
}
