import { Component, computed, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  countSignal = signal(0);
  count = 0

  height = signal(0);
  width = signal(0);
  area = computed(() => this.height() * this.width())

  speed = signal(0);
  color = signal("black");

  value: WritableSignal<string> = signal('');

  constructor() {
    effect(() => {
      // console.log("count property : ",this.countP);
      // console.log("count signal : ",this.countS());

      if(this.speed()>=0 && this.speed()<80) {
        this.color.set("green");
      }else if(this.speed()>=80 && this.speed()<120) {
        this.color.set("orange");
      }else {
        this.color.set("red");
      }
    })
  }

  updateCountS() {
    this.countSignal.update(val => val + 1);
  }

  updateCountP() {
    this.count = this.count + 1;
  }

  updateValue(signalRef: WritableSignal<number>, change: number) {
    signalRef.update(value => Math.max(0, value + change));
  }

  updateSpeed(change: number) {
    this.speed.update(value => Math.max(0, value + change))
  }

  defaultValue() {
    this.value.set("Hello World!");
  }

  setValue(val:string) {
    this.value.set(val);
  }
}
