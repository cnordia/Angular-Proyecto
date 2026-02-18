import { Component, inject, OnInit, signal } from '@angular/core';
import { Api } from '../../services/api';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FavoritosService } from '../../services/favorito';


@Component({
  selector: 'app-artista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss'],
})
export class ArtistaComponent implements OnInit {

  private data = inject(Api)
  private route = inject(ActivatedRoute);

  private favoritosService = inject(FavoritosService)
  esFavorito:boolean = false;


  infoArtista = signal<any>(null);
  infoTopCanciones = signal<any[]>([]);
  infoAlbumes = signal<any[]>([]);

  ngOnInit() {
    const idArtista = this.route.snapshot.paramMap.get('id');

    if (idArtista) {
      
      this.data.obtenerArtista(idArtista).subscribe((datos: any) => {
        this.infoArtista.set(datos);

        this.esFavorito = this.favoritosService.existe(this.infoArtista().idArtista); 

      });

      this.data.obtenerTopCanciones(idArtista).subscribe((datos: any) => {
        this.infoTopCanciones.set(datos?.data || []);
      });

      this.data.obtenerTopAlbumes(idArtista).subscribe((datos: any) => {
        this.infoAlbumes.set(datos?.data || []);
      });
    }

  }

  toggleFavorito() {
    if (this.esFavorito) {
      // Si ya lo es, lo quitamos
      this.favoritosService.removeFavorito(this.infoArtista().idArtista);
      this.esFavorito = false;
    } else {
      // Si no lo es, lo guardamos
      this.favoritosService.addFavorito(this.infoArtista());
      this.esFavorito = true;
    }
  }

}
