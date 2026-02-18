import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FavoritosService } from '../../services/favorito';

@Component({
  selector: 'app-lista-favoritos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lista-favoritos.component.html'
})
export class ListaFavoritosComponent implements OnInit {

  private favService = inject(FavoritosService);
  misArtistas: any[] = [];

  ngOnInit() {
    this.cargarFavoritos();
  }

  cargarFavoritos() {
    this.misArtistas = this.favService.getFavoritos();
  }

  eliminar(id: any) {
    this.favService.removeFavorito(id); // Borrar del localStorage
    this.cargarFavoritos();             // Recargar la lista para que desaparezca
  }
}