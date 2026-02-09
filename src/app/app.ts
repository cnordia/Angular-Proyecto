import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavegacionComponent } from './navegacion/navegacion.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavegacionComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Angular-Proyect');
  
  cambiarNombre(){
  this.title.set('!Angular con Vite es genial¡');
}
}

