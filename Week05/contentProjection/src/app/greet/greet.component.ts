import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  @Input() parentData: string;
  message: String = "Hello from child";
  constructor() { }

  ngOnInit(): void {
  }

}
