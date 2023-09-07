import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {


  constructor() { }
  async getPokemonImgByName(pkName: string) {

    const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon/';
    //TODO
  }
}
