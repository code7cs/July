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
}
