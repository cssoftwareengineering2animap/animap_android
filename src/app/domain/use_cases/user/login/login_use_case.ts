import { Inject, Injectable } from "@angular/core"
import { flatMap } from "rxjs/operators"
import { Storage, StorageToken } from "../../../providers/storage"
import {
  UserRepository,
  UserRepositoryToken,
} from "../../../repositories/user_repository"
import { LoginDto } from "./login.dto"

@Injectable()
export class LoginUseCase {
  constructor(
    @Inject(UserRepositoryToken)
    private readonly userRepository: UserRepository,
    @Inject(StorageToken)
    private readonly storage: Storage
  ) {}

  execute = (data: LoginDto) =>
    this.userRepository
      .login(data)
      .pipe(flatMap(({ data: token }) => this.storage.set("token", token)))
}
