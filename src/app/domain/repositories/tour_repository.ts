import { Observable } from "rxjs"
import { Envelope } from "../../core/types/envelope"
import { Tour, Pet, Host } from "../entities"

export type TourFeed = Omit<
  Tour,
  "pet" | "host" | "createdAt" | "updatedAt"
> & {
  host: Pick<Host, "id" | "name"> & { completedTourCount: number }
} & { pet: Pick<Pet, "name"> }

export interface TourRepository {
  getFeed: () => Observable<Envelope<TourFeed[]>>
  getTours: (query?: Pick<Tour, "status">) => Observable<Envelope<Tour[]>>
  acceptTour: (tour: Tour) => Observable<Envelope<Tour>>
}

export const TourRepositoryToken = "TourRepository"
