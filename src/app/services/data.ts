import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RespuestaAPI } from '../interface/data.interface';

@Injectable({providedIn: 'root',})

export class Data {
  private http = inject(HttpClient);

  private urlBase = '/deezer-api/';
  

  datos = signal<any>(null) //El signal actúa como un notificador al cambiar los valores usando .set() a todos los lugares donde se está usando


  hacerPeticionAPI( url:string, params?: HttpParams){
    // Hacemos la petición GET
    //Ponemos solo {params} porque es la manera corta de decir (params:params)
    this.http.get(url, { params }).subscribe({
      next: (resultado: any) => {
        this.datos.set(resultado.data[0]);
        console.log('Datos guardados:', resultado.data[0]);
      },
      error: (err) => console.error('Error en la API:', err)
    });
  }


  buscarArtista(nombre: string) {
    const url = this.urlBase + 'search/artist';
    const params = new HttpParams().set('q', nombre).set('limit', '1');
    this.hacerPeticionAPI(url, params);
  }

  buscarTopCanciones(id_artista:string){
    const url = this.urlBase + `/artist/${id_artista}/top`;
    const params = new HttpParams().set("limit",5);
    this.hacerPeticionAPI(url, params);

  }

  buscarCancion(nombreCancion: string){
    const url = this.urlBase + 'search/track';
    const params = new HttpParams().set('q', nombreCancion).set('limit',1);
    this.hacerPeticionAPI(url, params);
  }

  generos(){
    const url = this.urlBase+'genre';
    this.hacerPeticionAPI(url);
  }
  
}