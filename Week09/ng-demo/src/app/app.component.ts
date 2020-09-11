import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { ViewChildCompComponent } from './view-child-comp/view-child-comp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(ViewChildCompComponent)
  firstMessageComponent: ViewChildCompComponent;

  messages: string[] = ['Message 1', 'Message 2', 'Message 3', 'Message 4'];
  // title = 'ng-demo';

  persons: Array<any>;
  ngOnInit() {
    this.persons = [
      { firstName: 'John', lastName: 'Doe', age: 20 },
      { firstName: 'Steve', lastName: 'Rogers', age: 12 },
      { firstName: 'Tony', lastName: 'Stark', age: 30 },
      { firstName: 'Bruce', lastName: 'Banner', age: 25 },
    ];
  }

  ngAfterViewInit() {
    this.firstMessageComponent.message =
      'this message changed from parent component';
  }
}
