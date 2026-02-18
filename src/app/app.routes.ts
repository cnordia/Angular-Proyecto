import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { GenerosComponent } from './page/generos/generos.component';
import { FormularioComponent } from './page/formulario/formulario.component';
import { ArtistasGeneroComponent } from './page/artistas-genero/artistas-genero.component';
import { BuscadorComponent } from './page/buscador/buscador.component';
import { CancionComponent } from './page/cancion/cancion.component';
import { ArtistaComponent } from './page/artista/artista.component';
import { ListaFavoritosComponent } from './page/lista-favoritos/lista-favoritos.component';

export const routes: Routes = [
  {path: '', component: HomeComponent },               // Home + Carrusel
  {path: 'generos', component: GenerosComponent },     // Listado de géneros
  {path: 'artistasGenero/:id', component: ArtistasGeneroComponent }, // Artistas de un género (Pop, Rock...)
  {path: 'cancion/:id', component: CancionComponent }, // Detalles de una canción
  { path: 'artista/:id', component: ArtistaComponent }, // Detalles de un artista
  { path: 'buscar', component: BuscadorComponent },     // Resultados del buscador
  { path: 'favoritos', component: ListaFavoritosComponent }, // lista guardada
  {path:'formulario', component: FormularioComponent}, // Formulario de contacto
  {path: '**', redirectTo: '' }                        // Si se equivocan, al home
];
