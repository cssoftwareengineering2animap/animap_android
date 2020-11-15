import { Inject, Injectable } from "@angular/core"
import {
  TourRepository,
  TourRepositoryToken,
} from "../../../repositories/tour_repository"

@Injectable()
export class AcceptTourUseCase {
  constructor(
    @Inject(TourRepositoryToken)
    private readonly tourRepository: TourRepository
  ) {}

  execute = this.tourRepository.acceptTour
}
