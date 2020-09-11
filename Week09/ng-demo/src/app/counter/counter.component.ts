import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  constructor() {}
  public count: number;

  ngOnInit(): void {}

  increase(num) {
    console.log(num);
    this.count = ++num;
  }

  decrease(num) {
    this.count = --num;
  }
}
