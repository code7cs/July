import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildCompComponent } from './view-child-comp.component';

describe('ViewChildCompComponent', () => {
  let component: ViewChildCompComponent;
  let fixture: ComponentFixture<ViewChildCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
