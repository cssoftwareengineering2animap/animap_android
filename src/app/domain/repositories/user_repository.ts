import { Observable } from "rxjs"
import { Envelope } from "../../core/types/envelope"
import { User } from "../entities/user_entity"
import { RegisterUserDto } from "../use_cases/user/create_user/register_user_dto"
import { ResetPasswordDto } from "../use_cases/user/forgot_password/reset_password/reset_password_dto"
import { LoginDto } from "../use_cases/user/login/login.dto"

export type Token = "string"

export interface UserRepository {
  create: (data: RegisterUserDto) => Observable<Envelope<User>>
  login: (data: LoginDto) => Observable<Envelope<Token>>
  requestForgotPassword: (email: string) => Observable<void>
  resetPassword: (data: ResetPasswordDto) => Observable<void>
}

export const UserRepositoryToken = "UserRepository"
