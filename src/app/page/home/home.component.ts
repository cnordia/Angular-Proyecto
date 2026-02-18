import { Component, inject, OnInit, signal}from '@angular/core';
import { Api } from '../../services/api';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit{

  public datos = inject(Api)  

  indiceActual = signal<number>(0);

  ngOnInit() {
    this.datos.obtenerTopArtista();
  }

  siguiente() {
    const total = this.datos.datos().length;
    
    // Si llegas al final, vuelve al 0
    this.indiceActual.update(i => (i + 1) % total); 
  }

  anterior() {
    const total = this.datos.datos().length;
    // Al restar 0 - 1 no de negativo, sino el último
    this.indiceActual.update(i => (i - 1 + total) % total); //update cambia su valor basandose en el anterior y el total para que no se salga del rango de índices disponibles
  }

}
