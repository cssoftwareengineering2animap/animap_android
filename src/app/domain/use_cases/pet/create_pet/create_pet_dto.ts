import { Pet } from "../../../entities/pet"

export type CreatePetDto = Pick<
  Pet,
  "name" | "age" | "type" | "race" | "observations"
> & { photo: FormData }
