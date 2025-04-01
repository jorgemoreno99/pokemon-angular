import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPokemonDTO } from 'src/app/models/interfaces/pokemon.interface';
import { imageBaseUrl } from 'src/environments/environments.dev';

@Component({
  selector: 'app-pokemon-simple-card',
  templateUrl: './pokemon-simple-card.component.html',
  styleUrls: ['./pokemon-simple-card.component.scss']
})
export class PokemonSimpleCardComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  @Input() pokemon!: IPokemonDTO;
  id!: string;

  ngOnInit(): void {
    this.id = this.pokemon.url.split('pokemon/')[1].split('/')[0]
  }

  getImageURL() {
    return imageBaseUrl + this.id + '.png'
  }
  onClickHandler(item: IPokemonDTO) {
    this.router.navigate(['details', this.id])
  }



}
