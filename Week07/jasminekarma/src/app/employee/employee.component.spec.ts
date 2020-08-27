import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AuthenticationService } from "../authentication.service";
import { EmployeeComponent } from "./employee.component";

describe("EmployeeComponent", () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let authService: AuthenticationService;
  let h1: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeComponent],
      providers: [AuthenticationService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    authService = TestBed.inject(AuthenticationService);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector("h1");
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should return the value 'checkAuthentication has been called'", () => {
    spyOn(authService, "checkAuthentication");
    let salSlip = component.getSalarySlip();

    // expect(salSlip).toEqual("Salary Slip");
    expect(authService.checkAuthentication).toHaveBeenCalled();
  });

  it("check the value of h1", () => {
    component.getSalarySlip();
    fixture.detectChanges();
    expect(h1.textContent).toBe(component.salSlip);
  });
});
