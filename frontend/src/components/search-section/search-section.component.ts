import { Component } from '@angular/core';
import { AlbumService } from 'src/services/album.service';
import { Card } from 'src/services/card';
import { PokeApiService } from 'src/services/poke-api.service';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.css']
})

export class SearchSectionComponent {
  pokemonName: string = '';
  pokemonDescription: string = '';

  constructor(private cardsService: AlbumService, private pokeApiService: PokeApiService) { }

  async onAddCard() {
    try {
      const pokemon = await this.pokeApiService.getPokemonImgByName(this.pokemonName);

      const newCard: Card = {
        imgURL: pokemon.sprites.imgUrl,
        imgURLback: pokemon.sprites.imgUrlBack,
        pokemonName: this.pokemonName,
        pokemonDescription: this.pokemonDescription,
      }

      this.cardsService.addPokemonCard(newCard);
      location.reload();
    } catch (error) {
      alert(`Pokemon "${this.pokemonName}" not found!`);
    } finally {
      this.clearInputs();
    }
  }

  clearInputs() {
    this.pokemonName = '';
    this.pokemonDescription = '';
  }
}
