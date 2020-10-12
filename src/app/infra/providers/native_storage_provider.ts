import { Injectable } from "@angular/core"
import { Storage } from "../../domain/providers/storage"

@Injectable()
export class NativeStorageProvider implements Storage {
  set = <T>(key: string, value: T) =>
    Promise.resolve(
      localStorage.setItem(
        key,
        typeof value === "string" ? value : JSON.stringify(value)
      )
    )
}
