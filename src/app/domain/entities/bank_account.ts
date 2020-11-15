import { Host } from "@angular/core"
import { Entity } from "./entity"

export interface BankAccount extends Entity {
  bank: string
  agency: string
  account: string
  owner: Host
}
