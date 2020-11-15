import { Injectable } from "@angular/core"
import { NativeStorage } from "@ionic-native/native-storage/ngx"
import { Platform } from "@ionic/angular"
import { Storage } from "../../domain/providers/storage"

@Injectable()
export class NativeStorageProvider implements Storage {
  private storage: globalThis.Storage | NativeStorage

  constructor(
    private readonly nativeStorage: NativeStorage,
    private readonly platform: Platform
  ) {
    this.storage = this.platform.is("cordova")
      ? this.nativeStorage
      : localStorage
  }

  set = async <T>(key: string, value: T) => {
    await this.storage.setItem(
      key,
      typeof value === "string" ? value : JSON.stringify(value)
    )
  }

  get = async <T>(key: string) => {
    const value = await this.storage.getItem(key)
    if (!value) {
      return null
    }

    try {
      return JSON.parse(value) as T
    } catch (error) {
      return (value as unknown) as T
    }
  }

  clear = async () => localStorage.clear()
}
