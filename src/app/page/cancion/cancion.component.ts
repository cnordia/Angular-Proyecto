import { Component, OnInit, inject } from '@angular/core';
import { Api } from '../../services/api';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cancion',
  imports: [RouterLink],
  templateUrl: './cancion.component.html',
  styleUrl: './cancion.component.scss',
})
export class CancionComponent implements OnInit {
  
  private route = inject(ActivatedRoute); // El ActivatedRoute para obtener el id del género de la URL y hacer la petición a la API para obtener los artistas de ese género
  private data = inject(Api); //El servicio Api para hacer la petición a la API y obtener los datos

  cancion = this.data.datos;

  ngOnInit() {
    const idCancion = this.route.snapshot.paramMap.get('id');

    if (idCancion) {
      console.log("ID capturado correctamente:", idCancion);
      this.data.buscarCancion(idCancion);
    }
  }


}
