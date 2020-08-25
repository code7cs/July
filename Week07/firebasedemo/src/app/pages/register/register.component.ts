import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  email = "";
  password = "";
  errorMessage = "";
  // firebase error handler
  error: {
    name: string;
    message: string;
  } = {
    name: "",
    message: "",
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  register() {
    if (this.validateForm(this.email, this.password)) {
      this.authService
        .registerWithEmail(this.email, this.password)
        .then(() => {});
    }
  }
  validateForm(email, password): boolean {
    return true;
  }
}
