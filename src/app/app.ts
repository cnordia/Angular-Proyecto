import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Api } from './services/api';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private data = inject(Api)

  todos_los_datos = this.data.datos;

  onBuscarArtista(nombre:string){
    if(nombre.trim()){ //Si el usuario mete un campo vacío "" es falsy, por lo que no entra al if
      this.data.buscarArtista(nombre);
    }
  }

  onBuscarTopCancionesArtista(id_artista: string){
    this.data.buscarTopCanciones(id_artista);
  }

  onBuscarCancion(cancion:string){
    if(cancion.trim()){
      this.data.buscarCancion(cancion);
    }
  }
}


