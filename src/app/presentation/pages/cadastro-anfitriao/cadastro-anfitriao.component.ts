import { Component, OnInit } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms"

@Component({
  selector: "app-cadastro-anfitriao",
  templateUrl: "./cadastro-anfitriao.component.html",
  styleUrls: ["./cadastro-anfitriao.component.scss"],
})
export class CadastroAnfitriaoComponent implements OnInit {
  public cadastroForm: FormGroup

  constructor(private formBuilder: FormBuilder) {}

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
    /*
    const nome = this.cadastroForm.get("nome").value
    const email = this.cadastroForm.get("email").value
    const senha = this.cadastroForm.get("senha").value
    const cpf = this.cadastroForm.get("cpf").value
    const dadosBancarios = this.cadastroForm.get("dadosBancarios").value

    const cadastro = new Cadastro(nome, email, senha, 2, cpf, dadosBancarios)
    this.cadastroService.cadastraUsuario(cadastro).subscribe()

    this.route.navigate(["/home"]) */
  }

  addClass() {
    if (document.querySelector("body")) {
      document.querySelector("body").style.background = "#ffc107"
    }
  }

  passwordsMatch = () =>
    this.cadastroForm.get("password").value ===
    this.cadastroForm.get("passwordConfirmation").value
}
