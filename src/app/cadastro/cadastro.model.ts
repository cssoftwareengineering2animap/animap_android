export class Cadastro {
  id: number

  nome: string

  email: string

  tipoUsuario: number

  senha: string

  cpf: string

  dadosBancarios: string

  constructor(
    nome: string,
    email: string,
    senha: string,
    tipoUsuario: number,
    cpf?: string,
    dadosBancarios?: string
  ) {
    this.nome = nome
    this.email = email
    this.senha = senha
    tipoUsuario = this.tipoUsuario
    this.cpf = cpf
    this.dadosBancarios = dadosBancarios
  }
}
