import { Inject, Injectable } from "@angular/core"
import { flatMap, map, tap } from "rxjs/operators"
import { Storage, StorageToken } from "../../../providers/storage"
import {
  HostRepository,
  HostRepositoryToken,
} from "../../../repositories/host_repository"

import { LoginUseCase } from "../../user/login/login_use_case"
import { CreateHostDto, RegisterBankAccountDto } from "./create_host_dto"

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

  execute = ({
    payment,
    ...hostData
  }: CreateHostDto & { payment: RegisterBankAccountDto }) =>
    this.hostRepository.create(hostData).pipe(
      tap(({ data: host }) => this.storage.set("host", host)),
      flatMap(({ data: host }) =>
        this.loginUseCase
          .execute({
            email: hostData.email,
            password: hostData.password,
          })
          .pipe(flatMap(() => this.hostRepository.registerBankAccount(payment)))
          .pipe(map(() => host))
      )
    )
}
