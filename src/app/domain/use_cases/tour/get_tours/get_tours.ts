import { Inject, Injectable } from "@angular/core"
import {
  TourRepository,
  TourRepositoryToken,
} from "../../../repositories/tour_repository"

@Injectable()
export class GetTours {
  constructor(
    @Inject(TourRepositoryToken)
    private readonly tourRepository: TourRepository
  ) {}

  execute = this.tourRepository.getTours
}
