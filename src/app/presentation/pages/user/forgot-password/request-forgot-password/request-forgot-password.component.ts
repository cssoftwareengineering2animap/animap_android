import { Component, OnInit } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { Router } from "@angular/router"

import { Failure } from "../../../../../core/types/failure"
import { RequestForgotPasswordUseCase } from "../../../../../domain/use_cases/user/forgot_password/request_forgot_pasword/request_forgot_pasword_use_case"

@Component({
  selector: "app-request-forgot-password",
  templateUrl: "./request-forgot-password.component.html",
  styleUrls: ["./request-forgot-password.component.scss"],
})
export class RequestForgotPasswordComponent implements OnInit {
  loginForm: FormGroup

  errorMessage = ""

  public existeUsuario: boolean

  public clicked = false

  public pesquisando = false

  constructor(
    private fb: FormBuilder,
    private readonly requestForgotPasswordUseCase: RequestForgotPasswordUseCase,
    private readonly route: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: this.fb.control("", Validators.required),
    })
    this.addOrangeBackground()
  }

  clickedToFalse() {
    this.clicked = false
  }

  addOrangeBackground() {
    if (document.querySelector("body")) {
      document.querySelector("body").style.background = "#ffc107"
    }
  }

  onSubmit() {
    const email = this.loginForm.get("email")?.value

    this.requestForgotPasswordUseCase.execute(email).subscribe(
      () => this.route.navigate(["/reset-password"], { state: { email } }),
      ([error]: Failure[]) => {
        this.errorMessage = error.message
      }
    )
  }
}
