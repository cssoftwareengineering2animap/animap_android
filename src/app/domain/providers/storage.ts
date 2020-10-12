export interface Storage {
  set: <T>(key: string, value: T) => Promise<void>
}

export const StorageToken = "Storage"
