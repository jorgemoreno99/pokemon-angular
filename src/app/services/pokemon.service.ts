import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlApi } from 'src/environments/environments.dev';
import { IPokemonResponse } from '../models/interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  item = '/pokemon'


  public get(){
    return this.httpClient.get<IPokemonResponse>(urlApi + this.item)
  }
}
