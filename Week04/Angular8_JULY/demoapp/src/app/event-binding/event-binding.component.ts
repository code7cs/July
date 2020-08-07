import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-event-binding",
  templateUrl: "./event-binding.component.html",
  styleUrls: ["./event-binding.component.css"],
})
export class EventBindingComponent implements OnInit {
  constructor() {}
  public greeting = "";
  ngOnInit(): void {}
  public name = "";
  onClick() {
    console.log("button clicked");
    this.greeting = "Hello";
  }
  logMessage(value) {
    console.log(value);
  }

  displayName = true;
  color = "blue";
  colors = ['red','blue','green'];
}
