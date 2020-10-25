export class Passeio {
  public idAnfitriao: number;
  public idUsuario: number;
  public idPet: number;
  public nmPet: string;
  public dtPasseio: string;
  public nrIdade: number;
  public dsRaca: string;

  constructor(idAnfitriao, idUsuario, idPet, nmPet, dtPasseio, nrIdade, dsRaca) {
    this.idAnfitriao= idAnfitriao;
    this.idUsuario= idUsuario;
    this.idPet= idPet;
    this.nmPet= nmPet;
    this.dtPasseio= dtPasseio;
    this.nrIdade= nrIdade;
    this.dsRaca= dsRaca;
  }
}
