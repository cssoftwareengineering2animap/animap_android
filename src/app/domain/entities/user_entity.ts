import { ID } from "../../core/types/id"

export interface User {
  id: ID
  name: string
  email: string
  phone: string
  pictures: string
  pets: string
  ratings: string
  gradings: string
  blockedUsers: string
  blockedByUsers: string
  createdAt: Date
  updatedAt: Date
}
