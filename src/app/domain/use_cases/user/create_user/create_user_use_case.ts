import { Inject, Injectable } from "@angular/core"
import { flatMap, tap } from "rxjs/operators"
import { Storage, StorageToken } from "../../../providers/storage"
import {
  UserRepository,
  UserRepositoryToken,
} from "../../../repositories/user_repository"
import { LoginUseCase } from "../login/login_use_case"
import { CreateUserDto } from "./create_user_dto"

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(UserRepositoryToken)
    private readonly userRepository: UserRepository,
    @Inject(StorageToken)
    private readonly storage: Storage,
    @Inject(LoginUseCase)
    private readonly loginUseCase: LoginUseCase
  ) {}

  execute = (data: CreateUserDto) =>
    this.userRepository.create(data).pipe(
      tap(({ data: user }) => this.storage.set("user", user)),
      flatMap(() => this.loginUseCase.execute(data))
    )
}
