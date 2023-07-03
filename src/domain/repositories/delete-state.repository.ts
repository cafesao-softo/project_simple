export interface IDeleteStateRepository {
  execute(params: IDeleteStateRepository.Params): Promise<boolean>
}

export namespace IDeleteStateRepository {
  export interface Params {
    id: string
  }
}
