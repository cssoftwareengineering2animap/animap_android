export class Solicitacao {
  //Identificador
  public cdSolicitacao: number

  public nmPet: string
  public nmAnfitriao: string

  constructor(cdSolicitacao: number, nmPet: string, nmAnfitriao: string) {
    this.cdSolicitacao = cdSolicitacao
    this.nmPet = nmPet
    this.nmAnfitriao = nmAnfitriao
  }
}
