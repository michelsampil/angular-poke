import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContainerComponent } from 'src/components/container/container.component';
import { PokemonCardComponent } from '../components/pokemon-card/pokemon-card.component';
import { SearchSectionComponent } from '../components/search-section/search-section.component';
import { FormsModule } from '@angular/forms';
import { PokemonDetailsComponent } from '../components/pokemon-details/pokemon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    PokemonCardComponent,
    SearchSectionComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
