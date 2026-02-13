import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';
import { GenerosComponent } from './page/generos/generos.component';
import { PopuGeneroComponent } from './page/popu-genero/popu-genero.component';
import { FormularioComponent } from './page/formulario/formulario.component';
import { ArtistasGeneroComponent } from './page/artistas-genero/artistas-genero.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },               // Home + Carrusel
  { path: 'generos', component: GenerosComponent },     // Listado de géneros
   { path: 'artistasGenero/:id', component: ArtistasGeneroComponent }, // Artistas de un género (Pop, Rock...)
//   { path: 'artista/:id', component: CancionesComponent }, // Canciones de un artista
//   { path: 'buscar', component: BusquedaComponent },     // Resultados del buscador
//   { path: 'favoritos', component: FavoritosComponent }, // Tu lista guardada
  { path: '**', redirectTo: '' }                        // Si se equivocan, al home
];
