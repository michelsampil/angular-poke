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

  async getPokemonCardByID(id: number): Promise<Card> {
    const response = await fetch(`${this.url}/${id}`);
    return await response.json();
  }

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

  async editPokemonCard(card: Card): Promise<void> {
    const settings = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(card),
    }

    await fetch(`${this.url}/${card.id}`, settings);
  }

  async removeOneCard(id: number): Promise<void> {
    const settings = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    }

    await fetch(`${this.url}/${id}`, settings);
  }
}
