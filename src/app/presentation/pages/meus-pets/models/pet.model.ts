export class Pet {
  public idPet: number;
  public idadePet: number;
  public nmPet: string;
  public racaPet: string;
  public obsPet: string;
  public tipoPet: string;

  constructor(idPet, idadePet, nmPet, racaPet, obsPet?, tipoPet?) {
    this.idPet = idPet;
    this.idadePet = idadePet;
    this.nmPet = nmPet;
    this.racaPet = racaPet;
    this.obsPet = obsPet;
    this.tipoPet = tipoPet;
  }
}
