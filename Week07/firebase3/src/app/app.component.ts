import { Component } from "@angular/core";
import { CrudService } from "./services/crud.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "firebase3";

  employee: any;
  employeeName: string;
  employeeAge: number;
  employeeAddress: string;
  message: string;

  constructor(private crud_service: CrudService) {}

  ngOnInit() {
    this.crud_service.get_AllEmployees().subscribe((data) => {
      this.employee = data.map((employee) => {
        return {
          id: employee.payload.doc.id,
          isedit: false,
          name: employee.payload.doc.data()["name"],
          age: employee.payload.doc.data()["age"],
          address: employee.payload.doc.data()["address"],
        };
      });
    });
    console.log(this.employee);
  }
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

  EditRecord(Record) {
    Record.isedit = true;
    Record.editname = Record.name;
    Record.editage = Record.age;
    Record.editaddress = Record.address;
  }

  UpdateRecord(recorddata) {
    let record = {};
    record["name"] = recorddata.editname;
    record["age"] = recorddata.editage;
    record["address"] = recorddata.editaddress;
    this.crud_service.update_employee(recorddata.id, record);
    recorddata.isedit = false;
  }

  Deleteemployee(record_id) {
    this.crud_service.delete_employee(record_id);
  }
}
