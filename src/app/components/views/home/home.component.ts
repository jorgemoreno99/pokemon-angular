import { imageBaseUrl } from './../../../../environments/environments.dev';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IPokemonDTO } from 'src/app/models/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';
import { IPokemonListResponse } from 'src/app/models/interfaces/pokemon-list-response.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(
    private pokemonService : PokemonService,
    private router: Router
  ){}


  pokemons : IPokemonDTO[] = []

  ngOnInit(): void {
   this.pokemonService.getList().subscribe({
    next: (response:IPokemonListResponse)=>{
      this.pokemons = response.results
      console.log(this.pokemons);

    },
    error: (err)=>{
      console.log("error ocurred");
    }
   });
  }


  getImageURL(pokemon: IPokemonDTO){
    let id = pokemon.url.split('pokemon/')[1].split('/')[0]
    return imageBaseUrl + id + '.png'
  }

  onClickHandler(item: IPokemonDTO){
    let id = item.url.split('pokemon/')[1].split('/')[0]
    this.router.navigate(['details', id])
  }


}
