import { HttpClient } from "@angular/common/http"
import { Inject, Injectable } from "@angular/core"
import { from } from "rxjs"
import { flatMap } from "rxjs/operators"
import { Tour, TourStatus } from "src/app/domain/entities"
import { StorageToken, Storage } from "../../domain/providers/storage"

import {
  TourFeed,
  TourRepository,
} from "../../domain/repositories/tour_repository"
import { environment } from "../../../environments/environment"
import { Envelope } from "../../core/types/envelope"
import { toQueryString } from "./utils"

@Injectable()
export class RemoteTourRepository implements TourRepository {
  constructor(
    private readonly http: HttpClient,
    @Inject(StorageToken)
    private readonly storage: Storage
  ) {}

  getFeed = () =>
    from(this.storage.get<string>("token")).pipe(
      flatMap(token =>
        this.http.get<Envelope<TourFeed[]>>(`${environment.apiUrl}/tours`, {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          headers: { Authorization: token },
        })
      )
    )

  getTours = (query?: { status: TourStatus }) =>
    from(this.storage.get<string>("token")).pipe(
      flatMap(token =>
        this.http.get<Envelope<Tour[]>>(
          `${environment.apiUrl}/tours?${toQueryString(query)}`,
          {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            headers: { Authorization: token },
          }
        )
      )
    )

  acceptTour = (tour: Tour) =>
    from(this.storage.get<string>("token")).pipe(
      flatMap(token =>
        this.http.get<Envelope<Tour>>(
          `${environment.apiUrl}/tours/${tour.id}/accepted_tours`,
          {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            headers: { Authorization: token },
          }
        )
      )
    )
}
