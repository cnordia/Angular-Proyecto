import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFavoritosComponent } from './lista-favoritos.component';

describe('ListaFavoritosComponent', () => {
  let component: ListaFavoritosComponent;
  let fixture: ComponentFixture<ListaFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaFavoritosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFavoritosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
