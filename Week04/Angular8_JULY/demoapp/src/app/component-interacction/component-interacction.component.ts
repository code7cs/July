import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SuperHeros} from "../super-heros";

@Component({
  selector: 'app-component-interacction',
  templateUrl: './component-interacction.component.html',
  styleUrls: ['./component-interacction.component.css']
})
export class ComponentInteracctionComponent implements OnInit {

  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();


  superHeros: SuperHeros[]


  constructor() { }

  ngOnInit(): void {
    this.superHeros = [
      {Id: 1, Name: "IRon Man"},
      {Id: 2, Name: "SuperMan"},
      {Id: 3, Name: "Thor"},
      {Id: 4, Name: "Captain America"},
    ]
  }
  fireEvent(){
    this.childEvent.emit("Data Sent From Child");
  }

  public name = "PipeTest";
  public message = "hello how are you";

  public person = {
    "firstName": "John",
    "lastName":"Smith"
  };
  public  date = new Date();

//  /////////////////////////////////









}
