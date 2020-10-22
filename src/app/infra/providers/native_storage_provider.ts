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

  get = <T>(key: string) => {
    const value = localStorage.getItem(key)
    if (!value) {
      return null
    }

    try {
      const parsedValue = JSON.parse(value) as T
      return Promise.resolve(parsedValue)
    } catch (error) {
      return Promise.resolve((value as unknown) as T)
    }
  }
}
