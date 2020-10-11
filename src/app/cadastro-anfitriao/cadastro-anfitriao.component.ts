import { Router } from "@angular/router"
import { Component, OnInit } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { CadastroService } from "../cadastro/cadastro.service"
import { Cadastro } from "../cadastro/cadastro.model"

@Component({
  selector: "app-cadastro-anfitriao",
  templateUrl: "./cadastro-anfitriao.component.html",
  styleUrls: ["./cadastro-anfitriao.component.scss"],
})
export class CadastroAnfitriaoComponent implements OnInit {
  public cadastroForm: FormGroup

  cpfRegex = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/

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
      cpf: this.formBuilder.control("", [
        Validators.required,
        Validators.pattern(this.cpfRegex),
      ]),
      dadosBancarios: this.formBuilder.control("", [Validators.required]),
      termos: this.formBuilder.control("", [Validators.requiredTrue]),
    })

    this.addClass()
  }

  onSubmit() {
    const nome = this.cadastroForm.get("nome").value
    const email = this.cadastroForm.get("email").value
    const senha = this.cadastroForm.get("senha").value
    const cpf = this.cadastroForm.get("cpf").value
    const dadosBancarios = this.cadastroForm.get("dadosBancarios").value

    const cadastro = new Cadastro(nome, email, senha, 2, cpf, dadosBancarios)
    this.cadastroService.cadastraUsuario(cadastro).subscribe()

    this.route.navigate(["/home"])
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
