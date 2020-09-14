import {
  Component,
  OnInit,
  Input,
  ContentChild,
  AfterContentInit,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-view-child-comp',
  templateUrl: './view-child-comp.component.html',
  styleUrls: ['./view-child-comp.component.css'],
})
export class ViewChildCompComponent implements OnInit, AfterContentInit {
  @Input() message: string;
  @ContentChild('projectedContent', { static: true })
  projectedContent: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    // console.log(this.projectedContent);
    this.projectedContent.nativeElement.innerHTML =
      'This is from child component.';
  }
}
