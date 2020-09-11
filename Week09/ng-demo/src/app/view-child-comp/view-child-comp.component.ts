import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-child-comp',
  templateUrl: './view-child-comp.component.html',
  styleUrls: ['./view-child-comp.component.css'],
})
export class ViewChildCompComponent implements OnInit {
  @Input() message: string;
  constructor() {}

  ngOnInit(): void {}
}
