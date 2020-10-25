export interface Storage {
  set: <T>(key: string, value: T) => Promise<void>
  get: <T>(key: string) => Promise<T | null>
  clear: () => Promise<void>
}

export const StorageToken = "Storage"
