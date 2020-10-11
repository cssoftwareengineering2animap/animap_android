export class CadastroPet {
  id: number

  nome: string

  raca: string

  tipo: string

  observacoes: string

  constructor(nome: string, tipo: string, raca?: string, observacoes?: string) {
    this.nome = nome
    this.raca = raca
    this.tipo = tipo
    this.observacoes = observacoes
  }
}
