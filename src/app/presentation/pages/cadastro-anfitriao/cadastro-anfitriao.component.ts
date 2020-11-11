import { Component, OnInit } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { Failure } from "../../../core/types/failure"
import { CreateHostUseCase } from "../../../domain/use_cases/host/create_host/create_host_use_case"

@Component({
  selector: "app-cadastro-anfitriao",
  templateUrl: "./cadastro-anfitriao.component.html",
  styleUrls: ["./cadastro-anfitriao.component.scss"],
})
export class CadastroAnfitriaoComponent implements OnInit {
  public cadastroForm: FormGroup

  errorMessage = ""

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private readonly createHostUseCase: CreateHostUseCase
  ) {}

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
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
      cpf: this.formBuilder.control("", [Validators.required]),
      bank: this.formBuilder.control("", [Validators.required]),
      agency: this.formBuilder.control("", [Validators.required]),
      account: this.formBuilder.control("", [Validators.required]),
      terms: this.formBuilder.control("", [Validators.requiredTrue]),
    })

    this.addClass()
  }

  onSubmit() {
    const name = this.cadastroForm.get("name")?.value
    const email = this.cadastroForm.get("email")?.value
    const password = this.cadastroForm.get("password")?.value
    const cpf = this.cadastroForm.get("cpf")?.value
    const bank = this.cadastroForm.get("bank")?.value
    const agency = this.cadastroForm.get("agency")?.value
    const account = this.cadastroForm.get("account")?.value

    this.createHostUseCase
      .execute({
        name,
        email,
        password,
        cpf,
        payment: {
          bank,
          agency,
          account,
        },
      })
      .subscribe(
        () => this.route.navigate(["/home"]),
        ([error]: Failure[]) => {
          this.errorMessage = error.message
        }
      )
  }

  addClass() {
    const body = document.querySelector("body")

    if (!body) {
      return
    }

    body.style.background = "#ffc107"
  }

  passwordsMatch = () => {
    const password = this.cadastroForm.get("password")?.value
    const passwordConfirmation = this.cadastroForm.get("passwordConfirmation")
      ?.value

    return password && passwordConfirmation && password === passwordConfirmation
  }
}
