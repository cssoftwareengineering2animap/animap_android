import { Component, OnInit } from "@angular/core"
import { faBars, faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import { Pet } from "./models/pet.model";

@Component({
  selector: "app-meus-pets",
  templateUrl: "./meus-pets.component.html",
  styleUrls: ["./meus-pets.component.scss"],
})
export class MeusPetsComponent implements OnInit {

  public pets: Pet[];
  faBars = faBars
  faPlusCircle = faPlusCircle
  public dropdownToggle = false

  constructor() {
    this.pets = [new Pet(1,2,'Bob', 'Pastor Alemão'),new Pet(2,1,'Pablo', 'Cocker'), new Pet(3,2,'Romeu', 'Beagle')]
  }

  ngOnInit(): void {}
  public toggle() {
    this.dropdownToggle = !this.dropdownToggle
  }

  public getIdade(idade: number) {
    return `${idade} ${(idade == 1) ? 'ano' : 'anos'}`
  }
}
