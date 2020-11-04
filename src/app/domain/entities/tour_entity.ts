import { ISODate } from "../../core/types/iso_date"
import { Entity } from "./entity"
import { Host } from "./host_entity"
import { Pet } from "./pet_entity"

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
