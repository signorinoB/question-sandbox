import { Component } from '@angular/core';

import { Decoro } from './decoro';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  decoro: Decoro;

  constructor() {
    
    this.decoro = new Decoro();

    this.decoro['$$data'].cats.value$.subscribe(n => console.log('cats', n));

    //this.decoro.bats = 'bats?';
   // this.decoro.$$data['pigs'].subscribe(n => console.log(n));
  }

  toggleDodos() { this.decoro.dodos = !this.decoro.dodos; }

  addCat() { this.decoro.cats = this.decoro.cats+1; }

  //addPig() { this.decoro.pigs = this.decoro.pigs+1; }
  
  remCat() { this.decoro.cats = this.decoro.cats-1; }

  //remPig() { this.decoro.pigs = this.decoro.pigs-1; }

  printDecoro() { console.log(this.decoro); }
}
