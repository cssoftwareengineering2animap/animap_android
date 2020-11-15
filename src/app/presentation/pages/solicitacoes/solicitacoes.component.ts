import { Component, OnInit } from "@angular/core"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { ConfirmationService } from "primeng/api"
import { Tour, TourStatus } from "src/app/domain/entities"
import { AcceptTourUseCase } from "src/app/domain/use_cases/tour/accept_tour/accept_tour_use_case"
import { GetTourFeedUseCase } from "src/app/domain/use_cases/tour/get_tour_feed/get_tour_feed_use_case"

@Component({
  selector: "app-solicitacoes",
  templateUrl: "./solicitacoes.component.html",
  styleUrls: ["./solicitacoes.component.scss"],
})
export class SolicitacoesComponent implements OnInit {
  public solicitacoes: Tour[]

  faBars = faBars

  public dropdownToggle = false

  constructor(
    private confirmationService: ConfirmationService,
    private readonly getTours: GetTourFeedUseCase,
    private readonly acceptTour: AcceptTourUseCase
  ) {}

  confirm(tour: Tour) {
    this.confirmationService.confirm({
      message: `Deseja aceitar a solicitação de ${tour.host.name}?`,
      acceptLabel: "Sim",
      rejectLabel: "Não",
      accept: () =>
        this.acceptTour.execute(tour).subscribe(() => {
          this.solicitacoes = this.solicitacoes.filter(t => t.id !== tour.id)
        }),
    })
  }

  ngOnInit(): void {
    this.getTours
      .execute({ status: TourStatus.pending })
      .subscribe(({ data: tours }) => {
        this.solicitacoes = tours
      })
  }

  public toggle() {
    this.dropdownToggle = !this.dropdownToggle
  }
}
