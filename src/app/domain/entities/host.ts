import { Entity } from "./entity"

export interface Host extends Entity {
  name: string
  email: string
  cpf: string
}
