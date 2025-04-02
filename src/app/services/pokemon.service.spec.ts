import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PokemonService } from './pokemon.service';
import { urlApi } from 'src/environments/environments.dev';
import { IPokemonListResponse } from '../models/interfaces/pokemon-list-response.interface';
import { IPokemonResponse } from '../models/interfaces/pokemon-response.interface';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpMock: HttpTestingController;

  const dummyListResponse: IPokemonListResponse = {
    results: [
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
    ],
    count: 1302,
    next: 'https://pokeapi.co/api/v2/pokemon?offset=50&limit=50',
    previous: null
  };

  const dummyPokemonItemResponse: IPokemonResponse = {
    id: 1,
    name: 'bulbasaur',
    height: 7,
    weight: 69,
    sprites: {
      front_default: 'front.png',
      front_female: null,
      front_shiny: 'front_shiny.png'
    },
    abilities: [
      { slot: 1, ability: { name: 'overgrow' } },
      { slot: 2, ability: { name: 'chlorophyll' } }
    ],
    types: [
      { slot: 1, type: { name: 'grass' } },
      { slot: 2, type: { name: 'poison' } }
    ],
    stats: [
      { base_stat: 45, stat: { name: 'hp' } },
      { base_stat: 49, stat: { name: 'attack' } },
    ]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService]
    });
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get list of pokemons', () => {
    const offset = 0;
    const limit = 50;
    service.getList(offset, limit).subscribe((response: IPokemonListResponse) => {
      expect(response).toEqual(dummyListResponse);
    });

    const req = httpMock.expectOne(
      `${urlApi}${service.item}?offset=${offset.toString()}&limit=${limit.toString()}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyListResponse);
  });


  it('should retrieve a pokemon by id with correct URL', () => {
    const id = '1';
    service.get(id).subscribe((response: IPokemonResponse) => {
      expect(response).toEqual(dummyPokemonItemResponse);
    });

    const req = httpMock.expectOne(`${urlApi}${service.item}/${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPokemonItemResponse);
  });

});
