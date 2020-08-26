import { Component } from "@angular/core";
import { CrudService } from "./services/crud.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "firebase3";

  employee: string;
  employeeName: string;
  employeeAge: number;
  employeeAddress: string;
  message: string;

  constructor(private crud_service: CrudService) {}

  CreateRecord() {
    let Record = {};
    Record["name"] = this.employeeName;
    Record["age"] = this.employeeAge;
    Record["address"] = this.employeeAddress;

    this.crud_service
      .create_newEmployee(Record)
      .then((res) => {
        this.employeeName = "";
        this.employeeAge = undefined;
        this.employeeAddress = "";
        console.log(res);
        this.message = "Employee data saved successfully";
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
