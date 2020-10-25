import { User } from "../../../entities/user_entity"

export type CreateUserDto = {
  password: string
} & Pick<User, "name" | "email">
