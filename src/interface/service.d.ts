interface IService {
  create(data: any): Promise<boolean>
  getState(value: string, relations: boolean): Promise<StateModel>
  getCity(value: string, relations: boolean): Promise<CityModel>
  getDistrict(value: string, relations: boolean): Promise<DistrictModel>
}
