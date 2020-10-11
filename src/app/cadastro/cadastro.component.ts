import { Router } from "@angular/router"
import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms"
import { CadastroService } from "./cadastro.service"
import { Cadastro } from "./cadastro.model"

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.scss"],
})
export class CadastroComponent implements OnInit {
  public cadastro: Cadastro

  public cadastroForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private cadastroService: CadastroService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      nome: this.formBuilder.control("", [
        Validators.required,
        Validators.minLength(6),
      ]),
      email: this.formBuilder.control("", [
        Validators.required,
        Validators.email,
      ]),
      senha: this.formBuilder.control("", [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmacaoSenha: this.formBuilder.control("", [
        Validators.required,
        Validators.minLength(6),
      ]),
      termos: this.formBuilder.control("", [Validators.requiredTrue]),
    })

    this.addClass()
  }

  onSubmit() {
    const nome = this.cadastroForm.get("nome").value
    const email = this.cadastroForm.get("email").value
    const senha = this.cadastroForm.get("senha").value

    const cadastro = new Cadastro(nome, email, senha, 1)
    this.cadastroService.cadastraUsuario(cadastro).subscribe()

    setTimeout(() => this.route.navigate(["/cadastro-pet"]), 1500)
  }

  addClass() {
    document.querySelector("body").style.background = "#ffc107"
  }

  senhasMatch() {
    return (
      this.cadastroForm.get("senha").value ===
      this.cadastroForm.get("confirmacaoSenha").value
    )
  }
}
