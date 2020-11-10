export class Passeio {
  // Identificadores
  public cdPasseio: number

  public cdAnfitriao: number

  public qtdPasseios: number

  public idStatus: number // Não-finalizado / Finalizado => (0,1)

  public vlPreco: number

  public nmAnfitriao: string

  public nmPet: string

  public dtPasseio: string

  constructor(
    cdPasseio: number,
    cdAnfitriao: number,
    qtdPasseios: number,
    idStatus: number,
    vlPreco: number,
    nmAnfitriao: string,
    nmPet: string,
    dtPasseio: string
  ) {
    this.cdPasseio = cdPasseio
    this.cdAnfitriao = cdAnfitriao
    this.qtdPasseios = qtdPasseios
    this.idStatus = idStatus
    this.vlPreco = vlPreco
    this.nmAnfitriao = nmAnfitriao
    this.nmPet = nmPet
    this.dtPasseio = dtPasseio
  }
}
