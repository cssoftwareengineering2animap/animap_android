import { Component, OnInit } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import _ from "lodash"
import { Failure } from "../../../../core/types/failure"
import { LoginUseCase } from "../../../../domain/use_cases/user/login/login_use_case"

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  errorMessage = ""

  public existeUsuario: boolean

  public clicked = false

  public pesquisando = false

  constructor(
    private fb: FormBuilder,
    private readonly loginUseCase: LoginUseCase,
    private readonly route: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: this.fb.control("", Validators.required),
      password: this.fb.control("", Validators.required),
    })
    this.addOrangeBackground()
  }

  clickedToFalse() {
    this.clicked = false
  }

  addOrangeBackground() {
    if (!_.isNil(document.querySelector("body"))) {
      document.querySelector("body").style.background = "#ffc107"
    }
  }

  onSubmit() {
    const email = this.loginForm.get("email")?.value as string
    const password = this.loginForm.get("password")?.value as string

    this.loginUseCase.execute({ email, password }).subscribe(
      () => this.route.navigate(["/home"]),
      ([error]: Failure[]) => {
        this.errorMessage = error.message
      }
    )
  }
}
