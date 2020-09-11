import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ViewChildCompComponent } from './view-child-comp/view-child-comp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(ViewChildCompComponent)
  firstMessageComponent: ViewChildCompComponent;

  messages: string[] = ['Message 1', 'Message 2', 'Message 3', 'Message 4'];
  // title = 'ng-demo';

  ngAfterViewInit() {
    this.firstMessageComponent.message =
      'this message changed from parent component';
  }
}
