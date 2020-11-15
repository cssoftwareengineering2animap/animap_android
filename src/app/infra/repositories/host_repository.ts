import { HttpClient } from "@angular/common/http"
import { Inject, Injectable } from "@angular/core"
import { from } from "rxjs"
import { flatMap } from "rxjs/operators"
import { environment } from "../../../environments/environment"
import { Envelope } from "../../core/types/envelope"
import { BankAccount } from "../../domain/entities/bank_account"
import { Host } from "../../domain/entities/host"
import { StorageToken, Storage } from "../../domain/providers/storage"
import { HostRepository } from "../../domain/repositories/host_repository"
import {
  CreateHostDto,
  RegisterBankAccountDto,
} from "../../domain/use_cases/host/create_host/create_host_dto"

@Injectable()
export class RemoteHostRepository implements HostRepository {
  constructor(
    private readonly http: HttpClient,
    @Inject(StorageToken)
    private readonly storage: Storage
  ) {}

  create = (data: CreateHostDto) =>
    this.http.post<Envelope<Host>>(`${environment.apiUrl}/hosts`, data)

  registerBankAccount = (data: RegisterBankAccountDto) =>
    from(this.storage.get<string>("token")).pipe(
      flatMap(token =>
        this.http.post<Envelope<BankAccount>>(
          `${environment.apiUrl}/bank_accounts`,
          data,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          { headers: { Authorization: token! } }
        )
      )
    )

  blockHost = (hostId: string) =>
    from(this.storage.get<string>("token")).pipe(
      flatMap(token =>
        this.http.post<void>(
          `${environment.apiUrl}/hosts/${hostId}/blockings`,
          {},
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          { headers: { Authorization: token! } }
        )
      )
    )
}
