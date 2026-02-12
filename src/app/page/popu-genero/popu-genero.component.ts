import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../../services/api';

@Component({
  selector: 'app-popu-genero',
  imports: [CommonModule],
  templateUrl: './popu-genero.component.html',
  styleUrl: './popu-genero.component.scss',
})
export class PopuGeneroComponent implements OnInit {

  private route = inject(ActivatedRoute); // El ActivatedRoute para obtener el id del género de la URL y hacer la petición a la API para obtener los artistas de ese género
  private data = inject(Api); //El servicio Api para hacer la petición a la API y obtener los datos

  artistasGenero = this.data.datos;
  idGenero: string = '';

  ngOnInit() {
    const idGenero = this.route.snapshot.paramMap.get('id');

    if (idGenero) {
      console.log("ID capturado correctamente:", idGenero);
      this.data.buscarArtistasdelGenero(idGenero);
    }
  }

}
