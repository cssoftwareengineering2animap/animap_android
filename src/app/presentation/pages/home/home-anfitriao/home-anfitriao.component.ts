import { Component, OnInit } from "@angular/core"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Passeio } from "./models/passeio.model"
@Component({
  selector: "app-home-anfitriao",
  templateUrl: "./home-anfitriao.component.html",
  styleUrls: ["./home-anfitriao.component.scss"],
})
export class HomeAnfitriaoComponent implements OnInit {
  public passeios: Passeio[]

  faBars = faBars

  public dropdownToggle = false

  constructor() {
    this.passeios = [
      new Passeio(1, 1, 1, "Thor", "24/10/2020 17:50", 2, "Pitbull"),
      new Passeio(2, 2, 2, "Pablo", "24/10/2020 13:50", 3, "Kocker"),
    ]
  }

  ngOnInit(): void {}

  public toggle() {
    this.dropdownToggle = !this.dropdownToggle
  }

  public dataToHora(data: string) {
    const indice = data.indexOf(":")
    const hora = data.slice(indice - 2, indice)
    const minutos = data.slice(indice + 1, indice + 3)

    return `${hora}:${minutos}`
  }

  public getIdade(idade: number) {
    return `${idade} ${idade == 1 ? "ano" : "anos"}`
  }
}
