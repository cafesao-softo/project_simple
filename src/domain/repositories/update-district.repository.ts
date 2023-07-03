export interface IUpdateDistrictRepository {
  execute(
    params: IUpdateDistrictRepository.Params,
    body: IUpdateDistrictRepository.Body
  ): Promise<boolean>
}

export namespace IUpdateDistrictRepository {
  export interface Params {
    id: string
  }

  export interface Body {
    name: string
  }
}
