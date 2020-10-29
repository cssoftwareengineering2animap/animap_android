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
  scheduledFor: Date
  tip: string
  pet: Pet
  host: Host
  status: TourStatus
}
