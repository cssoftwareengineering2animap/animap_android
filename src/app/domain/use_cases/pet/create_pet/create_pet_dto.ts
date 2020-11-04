import { Pet } from "../../../entities/pet_entity"

export type CreatePetDto = Pick<
  Pet,
  "name" | "age" | "type" | "race" | "observations"
> & { photo: FormData }
