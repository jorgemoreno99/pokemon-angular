import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IPokemonDTO } from 'src/app/models/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private pokemonService: PokemonService,
  ) { }


  pokemons: IPokemonDTO[] = []
  filteredPokemons: IPokemonDTO[] = []

  defaultOptions = [25,50,75,100,200,300]
  limitOpions = this.defaultOptions
  limit: number = this.defaultOptions[0];
  offset: number = 0;
  totalCount!: number;

  loaded : boolean = false;



  ngOnInit(): void {
    this.loadPokemonList()
  }


  loadPokemonList() {
    this.loaded = false;
    this.pokemonService.getList(this.offset, this.limit).subscribe(response => {
      this.pokemons = response.results
      this.filteredPokemons = this.pokemons
      this.totalCount = response.count;
      this.limitOpions = this.defaultOptions.concat([this.totalCount])
      this.loaded = true;
    });
  }

  moveOffset(direction: number) {
    let result = this.offset + (this.limit * direction);
    if (result >= 0 && result <= this.totalCount) {
      this.offset = result;
      this.loadPokemonList();
    }
  }

  onSearch(value: string) {
    if (value.trim() === '') {
      this.filteredPokemons = this.pokemons;
    } else {
      this.filteredPokemons = this.pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(value.toLowerCase())
      );
    }

  }
}
