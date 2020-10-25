import { Host } from "../../../entities/host_entity"

export type RegisterBankAccountDto = {
  bank: string
  agency: string
  account: string
}

export type CreateHostDto = {
  password: string
} & Omit<Host, "id" | "createdAt" | "updatedAt">
