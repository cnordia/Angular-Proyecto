import { Component, effect, inject, OnInit, signal}from '@angular/core';
import { Api } from '../../services/api';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit{

  
  public api = inject(Api)  

  indiceActual = signal<number>(0);

  constructor(){
    effect(() =>{
      console.log('////////////////////',this.api.datos(),'///')
    })
  }

  ngOnInit() {
    this.api.obtenerTopArtista(); // Llena api.datos()
  }

  // 2. FUNCIÓN SIGUIENTE (Derecha) ->
  siguiente() {
    const total = this.api.datos().length;
    // this.indiceActual.update(i => i + 1); // Esto es lo básico
    
    // Esto es lo PRO (Bucle Infinito): Si llegas al final, vuelve al 0
    this.indiceActual.update(i => (i + 1) % total); 
  }

  // 3. FUNCIÓN ANTERIOR (Izquierda) <-
  anterior() {
    const total = this.api.datos().length;
    // Truco matemático para que al restar 0 - 1 no de negativo, sino el último
    this.indiceActual.update(i => (i - 1 + total) % total);
  }

}
