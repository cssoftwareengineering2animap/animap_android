import { Entity } from "./entity"
import { User } from "./user"

export interface Pet extends Entity {
  name: string
  age: number
  sex: "male" | "female"
  race: string
  observations: string
  type: string
  profilePicture: string
  owner: User
  pictures: string[]
  ratings: string[]
  tours: string[]
}
