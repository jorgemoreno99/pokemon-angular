import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlApi } from 'src/environments/environments.dev';
import { IPokemonListResponse } from '../models/interfaces/pokemon-list-response.interface';
import { IPokemonResponse } from '../models/interfaces/pokemon-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  item = '/pokemon'


  public getList(offset: number = 0, limit: number = 50) {
    return this.httpClient.get<IPokemonListResponse>(`${urlApi}${this.item}`, {
      params: {
        offset: offset.toString(),
        limit: limit.toString(),
      }
    });
  }

  public get(id: string){
    return this.httpClient.get<IPokemonResponse>(urlApi + this.item + '/' + id)
  }
}
