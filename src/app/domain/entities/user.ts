import { Entity } from "./entity"

export interface User extends Entity {
  name: string
  email: string
  phone: string
  pictures: string
  pets: string
  ratings: string
  gradings: string
  blockedUsers: string
  blockedByUsers: string
}
