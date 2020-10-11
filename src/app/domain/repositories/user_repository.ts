import { Observable } from "rxjs"
import { Envelope } from "../../core/types/envelope"
import { User } from "../entities/user_entity"
import { RegisterUserDto } from "../use_cases/user/create_user/register_user_dto"

export interface UserRepository {
  create: (data: RegisterUserDto) => Observable<Envelope<User>>
}

export const UserRepositoryToken = "UserRepository"
