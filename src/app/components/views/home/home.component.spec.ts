import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import { PokemonService } from 'src/app/services/pokemon.service';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { of, throwError } from 'rxjs';

class PokemonServiceStub {
  getList(offset: number, limit: number) {
    return of({
      results: [
        { name: 'bulbasaur' },
        { name: 'ivysaur' },
        { name: 'venusaur' }
      ],
      count: 1000
    });
  }
}


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let pokemonService: PokemonService;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        { provide: PokemonService, useClass: PokemonServiceStub }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
    pokemonService = TestBed.inject(PokemonService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadPokemonList and update vars', fakeAsync(() => {

    spyOn(pokemonService, 'getList').and.callThrough();
    component.ngOnInit();
    tick();
    fixture.detectChanges();

    expect(pokemonService.getList).toHaveBeenCalledWith(component.offset, component.limit);
    expect(component.pokemons.length).toBeGreaterThan(0);
    expect(component.filteredPokemons.length).toBeGreaterThan(0);
    expect(component.totalCount).toEqual(1000);

    expect(component.limitOpions).toContain(1000);
    expect(component.loaded).toBeTrue();
  }));


  describe('onSearch', () => {
    beforeEach(fakeAsync(() => {
      component.ngOnInit();
      tick();
      fixture.detectChanges();
    }));


    it('should filter pokemons by search input', () => {
      component.onSearch('nusa'); // for venusaur
      expect(component.filteredPokemons.length).toEqual(1);
      expect(component.filteredPokemons[0].name).toEqual("venusaur");
    });


    it('should reset filteredPokemons when empty value', () => {
      component.filteredPokemons = [{ name: 'charmander' , url: ""}];
      component.onSearch('');
      expect(component.filteredPokemons).toEqual(component.pokemons);
    });
  });


  describe('moveOffset', () => {
    beforeEach(fakeAsync(() => {
      component.ngOnInit();
      tick();
      fixture.detectChanges();
    }));

    it('should increase offset and reload list ', fakeAsync(() => {
      const initial = component.offset;
      spyOn(component, 'loadPokemonList').and.callThrough();
      component.moveOffset(1);
      expect(component.offset).toEqual(initial + component.limit);
      expect(component.loadPokemonList).toHaveBeenCalled();

      component.offset = 400;
      component.limit = 100;
      component.moveOffset(-1);
      expect(component.offset).toEqual(300);
      expect(component.loadPokemonList).toHaveBeenCalledTimes(2);
    }));



    it('should adjust offset out of bounds', fakeAsync(() => {
      component.offset = 20;
      component.limit = 25; //initial
      spyOn(component, 'loadPokemonList').and.callThrough();
      component.moveOffset(-1);
      expect(component.offset).toBe(0);
      expect(component.loadPokemonList).toHaveBeenCalled();


      component.offset = 980;
      component.limit = 50;
      component.moveOffset(-1);
      expect(component.offset).toBe(930);
      expect(component.loadPokemonList).toHaveBeenCalledTimes(2);

    }));

  });


});
