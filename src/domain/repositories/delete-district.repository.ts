export interface IDeleteDistrictRepository {
  execute(params: IDeleteDistrictRepository.Params): Promise<boolean>
}

export namespace IDeleteDistrictRepository {
  export interface Params {
    id: string
  }
}
