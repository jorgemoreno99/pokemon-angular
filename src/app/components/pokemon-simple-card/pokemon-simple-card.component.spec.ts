import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSimpleCardComponent } from './pokemon-simple-card.component';

describe('PokemonSimpleCardComponent', () => {
  let component: PokemonSimpleCardComponent;
  let fixture: ComponentFixture<PokemonSimpleCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonSimpleCardComponent]
    });
    fixture = TestBed.createComponent(PokemonSimpleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
