export class Pet {
  public idPet: string

  public idadePet: string

  public nmPet: string

  public racaPet: string

  public obsPet: string

  public tipoPet: string

  constructor(
    idPet: string,
    idadePet: string,
    nmPet: string,
    racaPet: string,
    obsPet: string,
    tipoPet: string
  ) {
    this.idPet = idPet
    this.idadePet = idadePet
    this.nmPet = nmPet
    this.racaPet = racaPet
    this.obsPet = obsPet
    this.tipoPet = tipoPet
  }
}
