export interface IDatabaseConnection<T = any> {
  connect(): Promise<void>
  getConnection(): T
}

export namespace IDatabaseConnection {}
