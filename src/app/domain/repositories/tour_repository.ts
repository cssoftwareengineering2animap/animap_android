import { Observable } from "rxjs"
import { Envelope } from "../../core/types/envelope"
import { Host } from "../entities/host_entity"
import { Pet } from "../entities/pet_entity"
import { Tour } from "../entities/tour_entity"

export type TourFeed = Tour & Pick<Host, "name"> & Pick<Pet, "name">

export interface TourRepository {
  getFeed: () => Observable<Envelope<TourFeed[]>>
}

export const TourRepositoryToken = "TourRepository"
