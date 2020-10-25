import { Inject, Injectable } from "@angular/core"
import { flatMap, tap } from "rxjs/operators"
import { Storage, StorageToken } from "../../../providers/storage"
import {
  HostRepository,
  HostRepositoryToken,
} from "../../../repositories/host_repository"

import { CreateUserDto } from "../../user/create_user/create_user_dto"
import { LoginUseCase } from "../../user/login/login_use_case"

@Injectable()
export class CreateHostUseCase {
  constructor(
    @Inject(HostRepositoryToken)
    private readonly hostRepository: HostRepository,
    @Inject(StorageToken)
    private readonly storage: Storage,
    @Inject(LoginUseCase)
    private readonly loginUseCase: LoginUseCase
  ) {}

  execute = (data: CreateUserDto) =>
    this.hostRepository.create(data).pipe(
      tap(({ data: user }) => this.storage.set("host", user)),
      flatMap(() => this.loginUseCase.execute(data))
    )
}
