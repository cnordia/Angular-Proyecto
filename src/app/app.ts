import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { Data } from './services/data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavegacionComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private data = inject(Data)

  artista = this.data.datos;

  onBuscar(nombre:string){
    if(nombre.trim()){
      this.data.buscarArtista(nombre);
    }
  }

}


