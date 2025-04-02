import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAbilityDTO, IPokemonResponse, ITypeDTO } from 'src/app/models/interfaces/pokemon-response.interface';
import { PokemonService } from 'src/app/services/pokemon.service';
import { POKEMON_TYPE_COLORS } from 'src/assets/pokemon-types-colors';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  id!: string;
  pokemon!: IPokemonResponse;
  loaded: boolean = false;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')?? '';
      this.loadInfo()
    });


  }

  loadInfo(){
    if(!this.id){
      this.router.navigate([''])
    }
    this.loaded = false;

    this.pokemonService.get(this.id).subscribe({
      next: (response: IPokemonResponse) => {
        this.pokemon = response
        this.loaded = true;
      }
    });
  }



  getAbilitiesStr(abilities: IAbilityDTO[]){
    return abilities.map(a => this.capitalizeFirstLetter(a.ability.name)).join(' ');
  }

  capitalizeFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() + " ";
  }

  backButtonHandler(){
    this.router.navigate([''])
  }

  movePokemon(index: number){
    this.id = (Number(this.id) + index).toString();
    this.loadInfo()
  }

  getTypeColor(type: string){
    return POKEMON_TYPE_COLORS[type.toLowerCase()] || 'lightgray';
  }


}
