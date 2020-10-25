import { ConfirmationService } from "primeng/api"
import { Component, OnInit } from "@angular/core"
import { faBars, faBan, faComment } from "@fortawesome/free-solid-svg-icons"
import { Passeio } from "./models/passeio.model"

@Component({
  selector: "app-passeios",
  templateUrl: "./passeios.component.html",
  styleUrls: ["./passeios.component.scss"],
})
export class PasseiosComponent implements OnInit {
  public passeios: Passeio[]

  faBars = faBars
  faBan = faBan
  faComment = faComment

  public dropdownToggle = false
  public display: boolean = false

  public toggle() {
    this.dropdownToggle = !this.dropdownToggle
  }

  constructor(private confirmationService: ConfirmationService) {
    this.passeios = [
      new Passeio(1,1,12,1,25,'Marcelo','Bilu','24/10/2020 13:40'),
      new Passeio(2,1,19,0,34.99,'Luís Fernando','Romeu','02/10/2020 15:30')
    ]
  }

  showDialog() {
    this.display = true
  }

  confirm(nomeAnfitriao: string) {
    this.confirmationService.confirm({
      message: `Tem certeza que deseja bloquear ${nomeAnfitriao}?`,
      acceptLabel: "Sim",
      rejectLabel: "Não",
      accept: () => {
        //Actual logic to perform a confirmation
      },
    })
  }

  ngOnInit(): void {}

  public getHora(data: string) {
    let indice = data.indexOf(":")
    let hora = data.slice(indice - 2, indice)
    let minutos = data.slice(indice + 1, indice + 3)

    return `${hora}:${minutos}`
  }
  public getData(data: string) {
    return `${data.slice(0, 10)}`
  }
}
