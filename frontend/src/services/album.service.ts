import { Injectable } from '@angular/core';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  url: string = 'http://localhost:3000/cards';

  constructor() { }

  async getPokemonCards(): Promise<Card[]> {
    const response = await fetch(this.url);
    return await response.json();
  }

  // async getPokemonCardByID(id: number): Promise<Card> {
  // TODO
  // }

  async addPokemonCard(card: Card): Promise<void> {
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(card),
    }

    await fetch(this.url, settings);
  }

  //async editPokemonCard(card: Card): Promise<void> {
  // TODO
  //}

  //async removeOnePokemonCard(id: number): Promise<void> {
  // TODO
  //}
}
