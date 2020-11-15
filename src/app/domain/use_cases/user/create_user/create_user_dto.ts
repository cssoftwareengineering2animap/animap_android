import { User } from "../../../entities/user"

export type CreateUserDto = {
  password: string
} & Pick<User, "name" | "email">
