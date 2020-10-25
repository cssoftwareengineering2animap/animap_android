import { Observable } from "rxjs"
import { Envelope } from "../../core/types/envelope"
import { Pet } from "../entities/pet_entity"
import { CreatePetDto } from "../use_cases/pet/create_pet/create_pet_dto"

export interface PetRepository {
  create: (data: CreatePetDto) => Observable<Envelope<Pet>>
}

export const PetRepositoryToken = "PetRepository"
