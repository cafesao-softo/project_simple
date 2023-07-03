export interface IDeleteCityRepository {
  execute(params: IDeleteCityRepository.Params): Promise<boolean>
}

export namespace IDeleteCityRepository {
  export interface Params {
    id: string
  }
}
