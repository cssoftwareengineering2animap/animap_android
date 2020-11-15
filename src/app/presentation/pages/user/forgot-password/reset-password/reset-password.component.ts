import { Component, OnInit } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { flatMap } from "rxjs/operators"

import { Failure } from "../../../../../core/types/failure"
import { ResetPasswordUseCase } from "../../../../../domain/use_cases/user/forgot_password/reset_password/reset_password_use_case"
import { LoginUseCase } from "../../../../../domain/use_cases/user/login/login_use_case"

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.scss"],
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup

  errorMessage = ""

  public existeUsuario: boolean

  public clicked = false

  public pesquisando = false

  private email: string

  constructor(
    private fb: FormBuilder,
    private readonly resetPasswordUseCase: ResetPasswordUseCase,
    private readonly route: Router,
    private readonly loginUseCase: LoginUseCase
  ) {
    this.email = this.route.getCurrentNavigation()?.extras?.state?.email
  }

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      token: this.fb.control("", Validators.required),
      password: this.fb.control("", Validators.required),
    })

    this.addOrangeBackground()
  }

  clickedToFalse() {
    this.clicked = false
  }

  addOrangeBackground() {
    const body = document.querySelector("body")

    if (!body) {
      return
    }

    body.style.background = "#ffc107"
  }

  onSubmit() {
    const token = this.resetPasswordForm.get("token")?.value
    const password = this.resetPasswordForm.get("password")?.value

    this.resetPasswordUseCase
      .execute({ token, password })
      .pipe(
        flatMap(() =>
          this.loginUseCase.execute({ email: this.email, password })
        )
      )
      .subscribe(
        () => this.route.navigate(["/home"]),
        ([error]: Failure[]) => {
          this.errorMessage = error.message
        }
      )
  }
}
