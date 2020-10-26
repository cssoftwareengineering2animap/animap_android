import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { faImage, faPaw } from "@fortawesome/free-solid-svg-icons"
import { Router } from "@angular/router"
import { CreatePetUseCase } from "../../../domain/use_cases/pet/create_pet/create_pet_use_case"
import { Failure } from "../../../core/types/failure"

@Component({
  selector: "app-cadastro-pet",
  templateUrl: "./cadastro-pet.component.html",
  styleUrls: ["./cadastro-pet.component.scss"],
})
export class CadastroPetComponent implements OnInit {
  faImage = faImage
  faPaw = faPaw

  url = '../../../../assets/imagens/upload-icon.png';

  animais = ["Cachorro", "Gato"]

  public cadastroForm: FormGroup

  errorMessage = ""

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private readonly createPetUseCase: CreatePetUseCase
  ) {

  }

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      nome: this.formBuilder.control("", Validators.required),
      tipo: this.formBuilder.control(null, [Validators.required]),
      raca: this.formBuilder.control(""),
      observacoes: this.formBuilder.control(""),
      age: this.formBuilder.control(""),
      urlFoto: this.formBuilder.control(""),
    })
    this.addClass()
  }

  onSubmit() {
    const name = this.cadastroForm.get("nome").value
    const type = this.cadastroForm.get("tipo").value
    const race = this.cadastroForm.get("raca").value
    const observations = this.cadastroForm.get("observacoes").value
    const age = this.cadastroForm.get("age").value || 3

    const urlFoto = this.cadastroForm.get("urlFoto").value // add back-end
    console.log(urlFoto);
    this.createPetUseCase
      .execute({ name, type, race, observations, age })
      .subscribe(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        _pet => this.route.navigate(["/home"]),
        ([error]: Failure[]) => {
          this.errorMessage = error.message
        }
      )
  }

  onFileChange(event) {
    if(event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    }
  }

  addClass() {
    document.querySelector("body").style.background = "#fff"
  }
}
