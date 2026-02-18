import { Component, inject, OnInit } from '@angular/core';
import { Api } from '../../services/api';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-buscador',
  imports: [RouterLink],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.scss',
})
export class BuscadorComponent implements OnInit{

  private route = inject(ActivatedRoute); // Para leer la ?q=...
  public datos = inject(Api);

  terminoBusqueda: string = '';

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.terminoBusqueda = params['q'];

      if (this.terminoBusqueda) {        
        this.datos.buscarArtista(this.terminoBusqueda);
      }
    });
  }

}