import { ISODate } from "../../core/types/iso_date"
import { Entity } from "./entity"
import { Host } from "./host"
import { Pet } from "./pet"

export enum TourStatus {
  pending = "pending",
  denied = "denied",
  accepted = "accepted",
  completed = "completed",
}

export interface Tour extends Entity {
  scheduledFor: ISODate
  tip: string
  pet: Pet
  host: Host
  status: TourStatus
}
