import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { of, Subject } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

class PokemonServiceStub {
  get(id: string) {
    return of({
      name: 'lucario',
      height: 12,
      weight: 540,
      types: [
        { type: { name: 'Fighting' } },
        { type: { name: 'Steel' } }
      ],
      abilities: [
        { ability: { name: 'Justified' } }
      ],
      sprites: {
        front_default: '',
        front_female: null,
        front_shiny: ''
      },
      stats: [
        { base_stat: 60, stat: { name: 'hp' } }
      ]
    });
  }
}

class ActivatedRouteStub {
  private subject = new Subject<any>();
  paramMap = this.subject.asObservable();
  setParamMap(params: { [key: string]: any }) {
    this.subject.next({
      get: (key: string) => params[key]
    });
  }
}

class RouterStub {
  navigate(commands: any[]) { }
}



fdescribe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let pokemonService: PokemonService;
  let router: Router;
  let activatedRouteStub: ActivatedRouteStub;

  beforeEach(() => {
    // CONFIGURATION TO USE ACTIVATED ROUTE PARAMS
    activatedRouteStub = new ActivatedRouteStub();
    TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      providers: [
        { provide: PokemonService, useClass: PokemonServiceStub },
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: Router, useClass: RouterStub }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    pokemonService = TestBed.inject(PokemonService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load pokemon info', fakeAsync(() => {
    spyOn(component, 'loadInfo').and.callThrough();
    activatedRouteStub.setParamMap({ id: '448' });
    tick();
    fixture.detectChanges();
    expect(component.id).toBe('448');
    expect(component.loadInfo).toHaveBeenCalled();
    tick();
    fixture.detectChanges();
    expect(component.loaded).toBeTrue();
    expect(component.pokemon).toBeDefined();
    expect(component.pokemon.name).toEqual('lucario');
  }));


    it('backButtonHandler should navigate back home', () => {
      const routerSpy = spyOn(router, 'navigate');
      component.backButtonHandler();
      expect(routerSpy).toHaveBeenCalledWith(['']);
    });

    it('movePokemon should move to next or prev pokemon and load info', fakeAsync(() => {
      spyOn(component, 'loadInfo').and.callThrough();
      component.id = '156';
      component.movePokemon(1);
      tick();
      fixture.detectChanges();
      expect(component.id).toEqual('157');
      expect(component.loadInfo).toHaveBeenCalled();

      component.id = '800';
      component.movePokemon(-1);
      fixture.detectChanges();
      expect(component.id).toEqual('799');
      expect(component.loadInfo).toHaveBeenCalledTimes(2);
    }));



});
