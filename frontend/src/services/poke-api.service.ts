import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {


  constructor() { }
  async getPokemonImgByName(pkName: string): Promise<Pokemon> {

    const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon/';
    const pokemonName = pkName.trim().toLowerCase();
    const url = `${pokeApiUrl}${pokemonName}`

    const response = await fetch(url);
    const pokemon = await response.json();
    return {
      sprites: {
        imgUrl: pokemon.sprites.front_default,
        imgUrlBack: pokemon.sprites.back_default,
      }
    };
  }
}