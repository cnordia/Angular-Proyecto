import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopuGeneroComponent } from './popu-genero.component';

describe('PopuGeneroComponent', () => {
  let component: PopuGeneroComponent;
  let fixture: ComponentFixture<PopuGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopuGeneroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopuGeneroComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
