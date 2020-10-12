import { Router } from "@angular/router"
import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { RegisterUserUseCase } from "../../../../domain/use_cases/user/create_user/register_user_use_case"
import { Failure } from "../../../../core/types/failure"

@Component({
  selector: "app-register-user",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterUserComponent implements OnInit {
  public registrationForm: FormGroup

  public errorMessage = ""

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly route: Router,
    private readonly registerUserUseCase: RegisterUserUseCase
  ) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      name: this.formBuilder.control("", [
        Validators.required,
        Validators.minLength(6),
      ]),
      email: this.formBuilder.control("", [
        Validators.required,
        Validators.email,
      ]),
      password: this.formBuilder.control("", [
        Validators.required,
        Validators.minLength(6),
      ]),
      passwordConfirmation: this.formBuilder.control("", [
        Validators.required,
        Validators.minLength(6),
      ]),
      termos: this.formBuilder.control("", [Validators.requiredTrue]),
    })
  }

  onSubmit() {
    const name = this.registrationForm.get("name")?.value as string
    const email = this.registrationForm.get("email")?.value as string
    const password = this.registrationForm.get("password")?.value as string

    this.registerUserUseCase.execute({ name, email, password }).subscribe(
      () => this.route.navigate(["/cadastro-pet"]),
      ([error]: Failure[]) => {
        this.errorMessage = error.message
      }
    )
  }

  passwordsMatch = () => {
    const password = this.registrationForm.get("password")?.value as string
    const passwordConfirmation = this.registrationForm.get(
      "passwordConfirmation"
    )?.value as string

    return password && passwordConfirmation && password === passwordConfirmation
  }
}
