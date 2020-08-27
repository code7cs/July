import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  constructor() {}

  authenticate() {
    localStorage.setItem("user", "Bangalore");
  }

  checkAuthentication() {
    return localStorage.getItem("user") === "Bangalore";
  }
}
