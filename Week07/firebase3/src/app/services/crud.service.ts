import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class CrudService {
  constructor(private fireService: AngularFirestore) {}

  create_newEmployee(Record) {
    return this.fireService.collection("Employee").add(Record);
  }

  get_AllEmployees() {
    return this.fireService.collection("Employee").snapshotChanges();
  }

  update_employee(recordid, record) {
    this.fireService.doc("Employee/" + recordid).update(record);
  }

  delete_employee(record_id) {
    this.fireService.doc("Employee/" + record_id).delete();
  }
}
