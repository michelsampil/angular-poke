import { PokeApiService } from 'src/services/poke-api.service';
import { AlbumService } from 'src/services/album.service';
import { Component } from '@angular/core';
import { Card } from 'src/services/card';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  cards: Array<Card> = [];

  constructor(private pokeApi: PokeApiService, private albumApi: AlbumService) {
  }

  async getAlbum(): Promise<void> {
    try {
      this.cards = await this.albumApi.getPokemonCards();
    } catch (error) {
      console.log('error: ', error);
    }
  };

  ngOnInit(): void {
    this.getAlbum();
  }
}
