import { Inject, Injectable } from "@angular/core"
import {
  UserRepository,
  UserRepositoryToken,
} from "../../../../repositories/user_repository"

@Injectable()
export class ResetPasswordUseCase {
  constructor(
    @Inject(UserRepositoryToken) private readonly userRepository: UserRepository
  ) {}

  execute = this.userRepository.resetPassword
}
