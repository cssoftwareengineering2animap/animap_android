import { ConfirmationService } from "primeng/api"
import { Component, OnInit } from "@angular/core"
import { faBars, faBan, faComment } from "@fortawesome/free-solid-svg-icons"
import { Passeio } from "./models/passeio.model"
import { GetTourFeedUseCase } from "../../../domain/use_cases/tour/get_tour_feed/get_tour_feed_use_case"
import { TourFeed } from "../../../domain/repositories/tour_repository"
import { BlockHostUseCase } from "../../../domain/use_cases/host/block_host/block_host_use_case"

@Component({
  selector: "app-passeios",
  templateUrl: "./passeios.component.html",
  styleUrls: ["./passeios.component.scss"],
})
export class PasseiosComponent implements OnInit {
  public passeios: Passeio[]

  tours: TourFeed[]

  faBars = faBars

  faBan = faBan

  faComment = faComment

  public dropdownToggle = false

  public display = false

  public toggle() {
    this.dropdownToggle = !this.dropdownToggle
  }

  constructor(
    private confirmationService: ConfirmationService,
    private readonly getTourFeedUseCase: GetTourFeedUseCase,
    private readonly blockHostUseCase: BlockHostUseCase
  ) {
    this.passeios = [
      new Passeio(1, 1, 12, 1, 25, "Marcelo", "Bilu", "24/10/2020 13:40"),
      new Passeio(
        2,
        1,
        19,
        0,
        34.99,
        "Luís Fernando",
        "Romeu",
        "02/10/2020 15:30"
      ),
    ]
  }

  ngOnInit() {
    this.getTourFeedUseCase.execute().subscribe(({ data: tours }) => {
      this.tours = tours
    })
  }

  showDialog() {
    this.display = true
  }

  confirm(nomeAnfitriao: string) {
    this.confirmationService.confirm({
      message: `Tem certeza que deseja bloquear ${nomeAnfitriao}?`,
      acceptLabel: "Sim",
      rejectLabel: "Não",
      accept: x => console.log("aaaaa", x),
      // Actual logic to perform a confirmation
    })
  }

  public getHora(data: string) {
    const indice = data.indexOf(":")
    const hora = data.slice(indice - 2, indice)
    const minutos = data.slice(indice + 1, indice + 3)

    return `${hora}:${minutos}`
  }

  public getData(data: string) {
    return `${data.slice(0, 10)}`
  }
}
