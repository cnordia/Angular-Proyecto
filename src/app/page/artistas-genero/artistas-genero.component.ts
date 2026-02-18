import { Component, inject, effect } from '@angular/core';
import { Api } from '../../services/api';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-artistas-genero',
  imports: [RouterLink],
  templateUrl: './artistas-genero.component.html',
  styleUrl: './artistas-genero.component.scss',
})
export class ArtistasGeneroComponent {

  private data = inject(Api)
  private route = inject(ActivatedRoute)

  artistasGenero = this.data.datos;

  ngOnInit() {
    const idGenero = this.route.snapshot.paramMap.get('id');
    if(idGenero)
      this.data.buscarArtistasdelGenero(idGenero);
  }
  
}
