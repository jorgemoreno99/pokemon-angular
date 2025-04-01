import { Component } from '@angular/core';
import { IPokemonDTO, IPokemonResponse } from 'src/app/models/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  pokemons : IPokemonDTO[] = []


  constructor(private pokemonService : PokemonService){}

  ngOnInit(): void {
   this.pokemonService.get().subscribe({
    next: (response:IPokemonResponse)=>{
      this.pokemons = response.results
      console.log(this.pokemons);

    },
    error: (err)=>{
      console.log("error ocurred");
    }
   });
  }



}
