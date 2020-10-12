import { HttpClient } from "@angular/common/http"
import { retry } from "rxjs/operators"
import { Injectable } from "@angular/core"
import { User } from "../../domain/entities/user_entity"
import { RegisterUserDto } from "../../domain/use_cases/user/create_user/register_user_dto"
import { Envelope } from "../../core/types/envelope"
import { environment } from "../../../environments/environment"
import {
  UserRepository,
  Token,
} from "../../domain/repositories/user_repository"
import { LoginDto } from "../../domain/use_cases/user/login/login.dto"

@Injectable()
export class RemoteUserRepository implements UserRepository {
  constructor(private readonly http: HttpClient) {}

  login = (data: LoginDto) =>
    this.http
      .post<Envelope<Token>>(`${environment.apiUrl}/login`, data)
      .pipe(retry(1))

  create = (data: RegisterUserDto) =>
    this.http
      .post<Envelope<User>>(`${environment.apiUrl}/users`, data)
      .pipe(retry(1))
}
