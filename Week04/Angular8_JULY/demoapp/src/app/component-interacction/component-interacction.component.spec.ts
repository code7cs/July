import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInteracctionComponent } from './component-interacction.component';

describe('ComponentInteracctionComponent', () => {
  let component: ComponentInteracctionComponent;
  let fixture: ComponentFixture<ComponentInteracctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentInteracctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInteracctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
