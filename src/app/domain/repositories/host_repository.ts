import { Observable } from "rxjs"
import { Envelope } from "../../core/types/envelope"
import { BankAccount } from "../entities/bank_account_entity"
import { Host } from "../entities/host_entity"
import {
  CreateHostDto,
  RegisterBankAccountDto,
} from "../use_cases/host/create_host/create_host_dto"

export type Token = "string"

export interface HostRepository {
  create: (data: CreateHostDto) => Observable<Envelope<Host>>
  registerBankAccount: (
    data: RegisterBankAccountDto
  ) => Observable<Envelope<BankAccount>>
}

export const HostRepositoryToken = "HostRepository"
