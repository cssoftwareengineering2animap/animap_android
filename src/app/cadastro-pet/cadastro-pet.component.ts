import {
  AfterViewInit,
  Component,
  Directive,
  OnDestroy,
  OnInit,
} from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { faImage, faPaw } from "@fortawesome/free-solid-svg-icons"
import { Route } from "@angular/compiler/src/core"
import { Router } from "@angular/router"
import { CadastroPet } from "./cadastro-pet.model"
import { CadastroPetService } from "./cadastro-pet.service"

@Component({
  selector: "app-cadastro-pet",
  templateUrl: "./cadastro-pet.component.html",
  styleUrls: ["./cadastro-pet.component.scss"],
})
export class CadastroPetComponent implements OnInit {
  faImage = faImage

  faPaw = faPaw

  animais = ["Cachorro", "Gato"]

  public cadastroForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private cadastroPetService: CadastroPetService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      nome: this.formBuilder.control("", Validators.required),
      tipo: this.formBuilder.control(null, [Validators.required]),
      raca: this.formBuilder.control(""),
      observacoes: this.formBuilder.control(""),
    })
    this.addClass()
  }

  onSubmit() {
    const nome = this.cadastroForm.get("nome").value
    const tipo = this.cadastroForm.get("tipo").value
    const raca = this.cadastroForm.get("raca").value
    const observacoes = this.cadastroForm.get("observacoes").value

    const pet = new CadastroPet(nome, tipo, raca, observacoes)

    this.cadastroPetService.cadastraPet(pet).subscribe()

    this.route.navigate(["/home"])
  }

  addClass() {
    document.querySelector("body").style.background = "#fff"
  }
}
