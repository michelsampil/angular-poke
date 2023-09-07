import { Component, Input } from '@angular/core';
import { Card } from 'src/services/card';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input() card!: Card;


}
