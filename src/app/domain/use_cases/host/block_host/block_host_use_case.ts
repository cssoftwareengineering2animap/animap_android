import { Inject, Injectable } from "@angular/core"
import {
  HostRepository,
  HostRepositoryToken,
} from "../../../repositories/host_repository"

@Injectable()
export class BlockHostUseCase {
  constructor(
    @Inject(HostRepositoryToken)
    private readonly hostRepository: HostRepository
  ) {}

  execute = this.hostRepository.blockHost
}
