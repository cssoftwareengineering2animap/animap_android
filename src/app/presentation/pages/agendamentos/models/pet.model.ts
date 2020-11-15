export class Pet {
  public idPet: number

  public idUsuario: number

  public idadePet: number

  public nmPet: string

  public racaPet: string

  constructor(
    idPet: number,
    idUsuario: number,
    idadePet: number,
    nmPet: string,
    racaPet: string
  ) {
    this.idPet = idPet
    this.idUsuario = idUsuario
    this.idadePet = idadePet
    this.nmPet = nmPet
    this.racaPet = racaPet
  }
}
