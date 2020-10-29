import { Inject, Injectable } from "@angular/core"
import {
  TourRepository,
  TourRepositoryToken,
} from "../../../repositories/tour_repository"

@Injectable()
export class GetTourFeedUseCase {
  constructor(
    @Inject(TourRepositoryToken)
    private readonly tourRepository: TourRepository
  ) {}

  execute = this.tourRepository.getFeed
}
