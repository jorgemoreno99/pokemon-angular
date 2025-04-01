import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPokemonResponse } from 'src/app/models/interfaces/pokemon-response.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

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

  pokemon!: IPokemonResponse;
  loaded: boolean = false; //TODO replace async



  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      if(!id) this.router.navigate(['']) //TODO ERROR
      else this.pokemonService.get(id).subscribe({
        next: (response: IPokemonResponse) => {
          this.pokemon = response
          this.loaded = true;
          console.log(this.pokemon);

        },
        error: (err) => {
          console.log("error ocurred");
        }
      });

    });


  }

  getTypesStr(types: any[]){
    return types.map(type => this.capitalizeFirstLetter(type.type.name)).join(' ');
  }

  getAbilitiesStr(abilities: any[]){
    return abilities.map(a => this.capitalizeFirstLetter(a.ability.name)).join(' ');
  }

  capitalizeFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() + " ";
  }

  backButtonHandler(){
    this.router.navigate([''])
  }




}
