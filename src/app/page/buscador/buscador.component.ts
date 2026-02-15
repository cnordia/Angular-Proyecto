import { Component, inject, OnInit } from '@angular/core';
import { Api } from '../../services/api';
import { ActivatedRoute, RouterLink } from '@angular/router'; // 1. Importar para leer URL y crear enlaces

@Component({
  selector: 'app-buscador',
  imports: [RouterLink],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.scss',
})
export class BuscadorComponent implements OnInit{

// INYECCIONES DE DEPENDENCIAS
  private route = inject(ActivatedRoute); // Para leer la ?q=...
  public api = inject(Api);        // Tu servicio de datos (Público para el HTML)

  // VARIABLES PARA LA VISTA
  terminoBusqueda: string = ''; // Para mostrar "Resultados de: Eminem"

  ngOnInit() {
    // ⚠️ CLAVE DEL ÉXITO: Usamos .subscribe() en lugar de .snapshot
    // ¿Por qué? Porque si buscas "Eminem" y luego escribes "Shakira" en el navbar,
    // el componente NO se recarga, solo cambia la URL. 
    // .subscribe detecta ese cambio sin recargar la página.
    
    this.route.queryParams.subscribe(params => {
      this.terminoBusqueda = params['q']; // Leemos el parámetro 'q'

      if (this.terminoBusqueda) {
        console.log("🔍 Buscando:", this.terminoBusqueda);
        
        // Llamamos a la función del servicio.
        // Asegúrate de tener esta función en tu api.service.ts apuntando a /search/artist
        this.api.buscarArtista(this.terminoBusqueda);
      }
    });
  }
}