import { Component, OnInit } from "@angular/core"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { ConfirmationService } from "primeng/api"
import { Pet } from "./models/pet.model"

@Component({
  selector: "app-agendamentos",
  templateUrl: "./agendamentos.component.html",
  styleUrls: ["./agendamentos.component.scss"],
})
export class AgendamentosComponent implements OnInit {
  public pets: Pet[]

  faBars = faBars

  public dropdownToggle = false

  constructor(private confirmationService: ConfirmationService) {
    this.pets = [
      new Pet(1, 1, 3, "Nana", "Pintcher"),
      new Pet(2, 2, 4, "Bidu", "Beagle"),
      new Pet(3, 3, 1, "Branca", "Chow-chow"),
    ]
  }

  confirm(nomeAnimal: string) {
    this.confirmationService.confirm({
      message: `Deseja agendar um passeio com ${nomeAnimal}?`,
      acceptLabel: "Sim",
      rejectLabel: "Não",
      accept: () => {
        // Actual logic to perform a confirmation
      },
    })
  }

  ngOnInit(): void {}

  public toggle() {
    this.dropdownToggle = !this.dropdownToggle
  }

  public getIdade(idade: number): string {
    return `${idade} ${idade <= 1 ? "ano" : "anos"}`
  }
}
