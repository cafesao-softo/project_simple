export interface IUpdateCityRepository {
  execute(
    params: IUpdateCityRepository.Params,
    body: IUpdateCityRepository.Body
  ): Promise<boolean>
}

export namespace IUpdateCityRepository {
  export interface Params {
    id: string
  }

  export interface Body {
    name: string
  }
}
