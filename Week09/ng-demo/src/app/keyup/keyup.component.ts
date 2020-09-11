import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup',
  templateUrl: './keyup.component.html',
  styleUrls: ['./keyup.component.css'],
})
export class KeyupComponent implements OnInit {
  // values = '';
  constructor() {}

  ngOnInit(): void {}

  // onKey(event: KeyboardEvent) {
  //   this.values += (event.target as HTMLInputElement).value + ' | ';
  // }
  // value = '';
  // onEnter(value: string) {
  //   this.value = value;
  // }
  // heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  // addHero(newHero: string) {
  //   if (newHero) {
  //     this.heroes.push(newHero);
  //   }
  // }
  power = 5;
  factor = 1;
}
