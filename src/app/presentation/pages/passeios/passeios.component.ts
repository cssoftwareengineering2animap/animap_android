import { ConfirmationService } from "primeng/api"
import { Component, OnInit } from "@angular/core"
import { faBars, faBan, faComment } from "@fortawesome/free-solid-svg-icons"
import { GetTourFeedUseCase } from "../../../domain/use_cases/tour/get_tour_feed/get_tour_feed_use_case"
import { TourFeed } from "../../../domain/repositories/tour_repository"
import { BlockHostUseCase } from "../../../domain/use_cases/host/block_host/block_host_use_case"
import { Host } from "../../../domain/entities/host"
import { TourStatus } from "../../../domain/entities"

@Component({
  selector: "app-passeios",
  templateUrl: "./passeios.component.html",
  styleUrls: ["./passeios.component.scss"],
})
export class PasseiosComponent implements OnInit {
  tours: TourFeed[]

  faBars = faBars

  faBan = faBan

  faComment = faComment

  public dropdownToggle = false

  public display = false

  constructor(
    private confirmationService: ConfirmationService,
    private readonly getTourFeedUseCase: GetTourFeedUseCase,
    private readonly blockHostUseCase: BlockHostUseCase
  ) {}

  ngOnInit() {
    this.getTourFeedUseCase.execute().subscribe(({ data: tours }) => {
      this.tours = [
        {
          pet: {
            name: "Bobby",
          },
          scheduledFor: "2021-05-12 01:28:10",
          tip: "60",
          status: TourStatus.pending,
          host: {
            id: "a2f19364-44ff-46fe-967e-ccb7184c4f68",
            name: "Asha.Towne",
            completedTourCount: 10,
          },
          id: "06f648a4-9f4e-489f-b100-ae6f4bf55b47",
        },
      ]
      // this.tours = tours
    })
  }

  public toggle() {
    this.dropdownToggle = !this.dropdownToggle
  }

  showDialog() {
    this.display = true
  }

  confirm(host: Pick<Host, "id" | "name">) {
    this.confirmationService.confirm({
      message: `Tem certeza que deseja bloquear ${host.name}?`,
      acceptLabel: "Sim",
      rejectLabel: "Não",
      accept: () =>
        this.blockHostUseCase.execute(host.id).subscribe(() => {
          this.tours = this.tours.filter(tour => tour.host.id !== host.id)
        }),
    })
  }

  public getHour(data: string) {
    const indice = data.indexOf(":")
    const hora = data.slice(indice - 2, indice)
    const minutos = data.slice(indice + 1, indice + 3)

    return `${hora}:${minutos}`
  }

  public getDate(data: string) {
    return `${data.slice(0, 10)}`
  }

  formatCurrency = (tip: string) => Number(tip).toFixed(2).replace(".", ",")

  isTourPending = (tour: Pick<TourFeed, "status">) =>
    tour.status === TourStatus.pending

  isTourCompleted = (tour: Pick<TourFeed, "status">) =>
    tour.status === TourStatus.completed
}
