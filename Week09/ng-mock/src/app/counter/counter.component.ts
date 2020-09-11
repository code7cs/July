import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  public count: number;
  constructor() {}

  ngOnInit(): void {}
  increase(num) {
    this.count = ++num.target.value;
  }

  decrease(num) {
    this.count = --num.target.value;
  }
}
