import { User } from "../../../entities/user_entity"

export type LoginDto = {
  password: string
} & Pick<User, "email">
