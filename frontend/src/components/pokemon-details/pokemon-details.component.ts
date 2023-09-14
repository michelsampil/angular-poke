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
  edit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) { }

  // TODO
  // async save() {
  // }

  // TODO
  // async delete() {
  // }

  // TODO
  async getPokemon() {
    this.card = await this.albumService.getPokemonCardByID(13);
    console.log('this card 🔥: ', this.card);
  }


  ngOnInit(): void {
    this.getPokemon();
  }

}
