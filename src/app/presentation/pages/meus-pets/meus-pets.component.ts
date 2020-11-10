import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import {
  faBars,
  faPlusCircle,
  faImage,
} from "@fortawesome/free-solid-svg-icons"
import { Pet } from "./models/pet.model"

@Component({
  selector: "app-meus-pets",
  templateUrl: "./meus-pets.component.html",
  styleUrls: ["./meus-pets.component.scss"],
})
export class MeusPetsComponent implements OnInit {
  public pets: Pet[]

  display = false

  faBars = faBars

  faPlusCircle = faPlusCircle

  faImage = faImage

  public dropdownToggle = false

  animais = ["Cachorro", "Gato"]

  errorMessage = ""

  public cadastroForm: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.pets = [
      new Pet(1, 2, "Bob", "Pastor Alemão", "Observacao Teste", "Cachorro"),
      new Pet(2, 1, "Pablo", "Cocker", "Observacao Teste", "Cachorro"),
      new Pet(3, 2, "Romeu", "Beagle", "Observacao Teste", "Gato"),
    ]
    this.cadastroForm = this.formBuilder.group({
      id: this.formBuilder.control(""),
      nome: this.formBuilder.control("", Validators.required),
      tipo: this.formBuilder.control(null, [Validators.required]),
      raca: this.formBuilder.control(""),
      observacoes: this.formBuilder.control(""),
      age: this.formBuilder.control(""),
    })
  }

  ngOnInit(): void {}

  public toggle() {
    this.dropdownToggle = !this.dropdownToggle
  }

  public getIdade(idade: number) {
    return `${idade} ${idade == 1 ? "ano" : "anos"}`
  }

  public showDialog(pet: Pet) {
    this.display = true
    this.preencherEdit(pet)
  }

  public getNomePet(): string {
    return this.cadastroForm.get("nome").value
  }

  preencherEdit(pet: Pet) {
    this.cadastroForm.get("id").setValue(pet.idPet)
    this.cadastroForm.get("nome").setValue(pet.nmPet)
    this.cadastroForm.get("raca").setValue(pet.racaPet)
    this.cadastroForm.get("observacoes").setValue(pet.obsPet)
    this.cadastroForm.get("tipo").setValue(pet.tipoPet)
    this.cadastroForm.get("age").setValue(pet.idadePet)
  }

  public onEdit() {
    const id = this.cadastroForm.get("id").value
    const name = this.cadastroForm.get("nome").value
    const type = this.cadastroForm.get("tipo").value
    const race = this.cadastroForm.get("raca").value
    const observations = this.cadastroForm.get("observacoes").value
    const age = this.cadastroForm.get("age").value || 3

    const newPet = new Pet(id, age, name, race, observations, type)
    console.log(newPet)

    // Logica para edição no banco
  }
}
