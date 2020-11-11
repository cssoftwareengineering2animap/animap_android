export class Passeio {
  public idAnfitriao: string

  public idUsuario: string

  public idPet: string

  public nmPet: string

  public dtPasseio: string

  public nrIdade: string

  public dsRaca: string

  constructor(
    idAnfitriao: string,
    idUsuario: string,
    idPet: string,
    nmPet: string,
    dtPasseio: string,
    nrIdade: string,
    dsRaca: string
  ) {
    this.idAnfitriao = idAnfitriao
    this.idUsuario = idUsuario
    this.idPet = idPet
    this.nmPet = nmPet
    this.dtPasseio = dtPasseio
    this.nrIdade = nrIdade
    this.dsRaca = dsRaca
  }
}
