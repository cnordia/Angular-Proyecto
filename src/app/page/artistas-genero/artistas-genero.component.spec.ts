import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistasGeneroComponent } from './artistas-genero.component';

describe('ArtistasGeneroComponent', () => {
  let component: ArtistasGeneroComponent;
  let fixture: ComponentFixture<ArtistasGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistasGeneroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistasGeneroComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
