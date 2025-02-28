import axios, { Axios } from 'axios';

export class BaseServicesInstace {
  protected _instance: Axios;

  protected constructor(baseURL: string) {
    this._instance = axios.create({
      baseURL,
    });
  }
}
