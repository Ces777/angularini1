import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter2 {{counter}}</p>
    <button (click)="increase(+1)">+1</button>
    <button (click)="resetCounter()">limpiar</button>
    <button (click)="increase(-1)">-1</button>
  `
})

export class CounterComponent{
  constructor() { }
  public title:string = 'Hola Mundo';;
  public counter: number=10;

  increase(valor:number):void{
    this.counter +=valor;
  }
  resetCounter():void {
    this.counter=10;
  }

}
