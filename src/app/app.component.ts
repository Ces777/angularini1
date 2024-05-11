import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title:string = 'Hola Mundo';;
  public counter: number=10;

  increase(valor:number):void{
    this.counter +=valor;
  }
  resetCounter():void {
    this.counter=10;
  }

}
