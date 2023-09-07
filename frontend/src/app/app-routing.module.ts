import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from 'src/components/container/container.component';
import { PokemonDetailsComponent } from 'src/components/pokemon-details/pokemon-details.component';

const routes: Routes = [
  { path: 'pokemon/:PokemonId', component: PokemonDetailsComponent },
  { path: 'home', component: ContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
