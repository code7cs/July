import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-test-component",
  templateUrl: "./test-component.component.html",
  styleUrls: ["./test-component.component.css"],
})
export class TestComponentComponent implements OnInit {
  public name = "Hanfan Wang";
  public myId = "testid";

  public isDisables = true;
  constructor() {}

  ngOnInit(): void {}
}
