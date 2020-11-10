import { Component, OnInit } from "@angular/core"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { ConfirmationService } from "primeng/api"
import { Solicitacao } from "./models/solicitacao.model"

@Component({
  selector: "app-solicitacoes",
  templateUrl: "./solicitacoes.component.html",
  styleUrls: ["./solicitacoes.component.scss"],
})
export class SolicitacoesComponent implements OnInit {
  public solicitacoes: Solicitacao[]

  faBars = faBars

  public dropdownToggle = false

  constructor(private confirmationService: ConfirmationService) {
    this.solicitacoes = [
      new Solicitacao(1, "Bidu", "Ana"),
      new Solicitacao(1, "Romeu", "Bruno"),
      new Solicitacao(3, "Branca", "Carol"),
    ]
  }

  confirm(nomeAnfitriao: string) {
    this.confirmationService.confirm({
      message: `Deseja aceitar a solicitação de ${nomeAnfitriao}?`,
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
}
