import { User } from "../../../entities/user_entity"

export type RegisterUserDto = {
  password: string
} & Pick<User, "name" | "email">
