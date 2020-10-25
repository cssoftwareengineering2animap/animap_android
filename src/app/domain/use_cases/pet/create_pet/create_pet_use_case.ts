import { Inject, Injectable } from "@angular/core"
import {
  PetRepository,
  PetRepositoryToken,
} from "../../../repositories/pet_repository"

@Injectable()
export class CreatePetUseCase {
  constructor(
    @Inject(PetRepositoryToken)
    private readonly petRepository: PetRepository
  ) {}

  execute = this.petRepository.create
}
