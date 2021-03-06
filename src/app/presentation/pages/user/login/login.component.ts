import { Component, Inject, OnInit } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { Failure } from "../../../../core/types/failure"
import { Storage, StorageToken } from "../../../../domain/providers/storage"
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

  public pesquisando = false

  constructor(
    private fb: FormBuilder,
    private readonly loginUseCase: LoginUseCase,
    private readonly route: Router,
    @Inject(StorageToken)
    private readonly storage: Storage
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: this.fb.control("", Validators.required),
      password: this.fb.control("", Validators.required),
    })

    this.addOrangeBackground()

    this.storage.get<string>("token").then(token => {
      if (token) {
        this.route.navigate(["/home"])
      }
    })
  }

  addOrangeBackground() {
    const body = document.querySelector("body")

    if (!body) {
      return
    }

    body.style.background = "#ffc107"
  }

  onSubmit() {
    const email = this.loginForm.get("email")?.value as string
    const password = this.loginForm.get("password")?.value as string

    this.loginUseCase.execute({ email, password }).subscribe(
      () => this.route.navigate(["/home"]),
      ([error]: Failure[]) => {
        console.log("aaaa", error)
        this.errorMessage = error.message
      }
    )
  }
}
