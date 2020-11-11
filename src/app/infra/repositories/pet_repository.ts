import { HttpClient } from "@angular/common/http"
import { Inject, Injectable } from "@angular/core"
import { from } from "rxjs"
import { flatMap } from "rxjs/operators"
import { environment } from "../../../environments/environment"
import { Envelope } from "../../core/types/envelope"
import { Pet } from "../../domain/entities/pet_entity"
import { Storage, StorageToken } from "../../domain/providers/storage"
import { PetRepository } from "../../domain/repositories/pet_repository"
import { CreatePetDto } from "../../domain/use_cases/pet/create_pet/create_pet_dto"

@Injectable()
export class RemotePetRepository implements PetRepository {
  constructor(
    private readonly http: HttpClient,
    @Inject(StorageToken)
    private readonly storage: Storage
  ) {}

  create = (data: CreatePetDto) =>
    from(this.storage.get<string>("token")).pipe(
      flatMap(token =>
        this.http.post<Envelope<Pet>>(`${environment.apiUrl}/pets`, data, {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          headers: { Authorization: token! },
        })
      )
    )
}
