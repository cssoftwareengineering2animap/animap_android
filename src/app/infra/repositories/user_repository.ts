import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { User } from "../../domain/entities/user_entity"
import { RegisterUserDto } from "../../domain/use_cases/user/create_user/create_user_dto"
import { Envelope } from "../../core/types/envelope"
import { environment } from "../../../environments/environment"
import {
  UserRepository,
  Token,
} from "../../domain/repositories/user_repository"
import { LoginDto } from "../../domain/use_cases/user/login/login.dto"
import { ResetPasswordDto } from "../../domain/use_cases/user/forgot_password/reset_password/reset_password_dto"

@Injectable()
export class RemoteUserRepository implements UserRepository {
  constructor(private readonly http: HttpClient) {}

  login = (data: LoginDto) =>
    this.http.post<Envelope<Token>>(`${environment.apiUrl}/login`, data)

  create = (data: RegisterUserDto) =>
    this.http.post<Envelope<User>>(`${environment.apiUrl}/users`, data)

  requestForgotPassword = (email: string) =>
    this.http.post<void>(`${environment.apiUrl}/forgot_password`, { email })

  resetPassword = (data: ResetPasswordDto) =>
    this.http.patch<void>(`${environment.apiUrl}/forgot_password`, data)
}
