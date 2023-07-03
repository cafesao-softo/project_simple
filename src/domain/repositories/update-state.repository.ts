export interface IUpdateStateRepository {
  execute(
    params: IUpdateStateRepository.Params,
    body: IUpdateStateRepository.Body
  ): Promise<boolean>
}

export namespace IUpdateStateRepository {
  export interface Params {
    id: string
  }

  export interface Body {
    name: string
  }
}
