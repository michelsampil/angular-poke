import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from 'src/services/album.service';
import { Card } from 'src/services/card';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent {
  @Input() card!: Card;
  newTaskDescription: string = "";
  edit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) { }

  // Save the new description
  async save() {
    this.card.pokemonDescription = this.newTaskDescription;
    this.edit = false
    this.albumService.editPokemonCard(this.card);
    location.replace('./home');
  }

  // When delete the card, the page does not refresh, the location import does this automatically
  async delete() {
    await this.albumService.removeOnePokemonCard(this.card.id!);
    location.replace('./home');
  }

  async getPokemon() {
    this.route.params.subscribe(async params => {
      const CardId = params['PokemonId'];
      console.log('PokemonId: ', CardId);
      this.card = await this.albumService.getPokemonCardByID(CardId);
    });
  }


  ngOnInit(): void {
    this.getPokemon();
  }

}
