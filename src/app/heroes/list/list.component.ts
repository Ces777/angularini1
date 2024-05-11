import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public deletedHero?:string;

  public heroesName: string[] = ['Spiderman','Iroman','Hulk','She Hulk','Thor']

  removeLastHero():void {
  this.deletedHero =  this.heroesName.pop();
    //console.log(this.deletedHero);
  }

}

