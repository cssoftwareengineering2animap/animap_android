import { User } from "../../../entities/user"

export type LoginDto = {
  password: string
} & Pick<User, "email">
