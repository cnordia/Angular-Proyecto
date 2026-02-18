import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({providedIn: 'root',})

export class Api {
  private http = inject(HttpClient);

  private urlBase = 'deezer-api/';
  

  datos = signal<any>(null) //El signal actúa como un notificador al cambiar los valores usando .set() a todos los lugares donde se está usando

// rutaDatos puede ser: 'data', 'tracks.data', 'albums.data', o undefined
  hacerPeticionAPI(url: string, params?: HttpParams, rutaDatos?: string) {
    this.http.get(url, { params }).subscribe({
      next: (resultado: any) => {
        
        let datosAProcesar = resultado;

        if (rutaDatos) {
          const niveles = rutaDatos.split('.');
          
          for (const nivel of niveles) {
            if (datosAProcesar && datosAProcesar[nivel]) {
              // Sobrescribimos la variable para bajar un nivel
              datosAProcesar = datosAProcesar[nivel];
            }
          }
        }

        // Como ultima opción si el resultado tiene una propiedad 'data', la usamos (esto es común en la API de Deezer)
        if (datosAProcesar && datosAProcesar.data) {
          datosAProcesar = datosAProcesar.data;
        }
        this.datos.set(datosAProcesar);
        console.log('Datos finales guardados:', datosAProcesar);
      },
      error: (err) => console.error('Error en la API:', err)
    });
  }


  buscarArtista(nombre: string) {
    const url = this.urlBase + `search/artist/`;
    const params = new HttpParams().set("q", nombre).set("limit",1);
    this.hacerPeticionAPI(url, params);
  }

  buscarTopCanciones(id_artista:string){
    const url = this.urlBase + `/artist/${id_artista}/top`;
    const params = new HttpParams().set("limit",5);
    this.hacerPeticionAPI(url, params);
  }

  buscarTopAlbumes(id_artista:string){
    const url = this.urlBase + `/artist/${id_artista}/albums`;
    const params = new HttpParams().set("limit",5);
    this.hacerPeticionAPI(url, params);
  }

  buscarCancion(idCancion: string){
    const url = this.urlBase + 'track/'+ idCancion;
    this.hacerPeticionAPI(url);
  }
  
  obtenerGeneros() {
    const url = this.urlBase + 'genre';
    this.hacerPeticionAPI(url); 
  }

  buscarArtistasdelGenero(id_genero:string){
    const url = this.urlBase + 'chart/'+`${id_genero}/tracks`;
    this.hacerPeticionAPI(url, undefined, 'track.data');
  }
  
  obtenerTopArtista() {
  const url = this.urlBase + `chart/0/artists`;
  this.hacerPeticionAPI(url, undefined); 
  }


  obtenerArtista(id: string) {
  return this.http.get(`${this.urlBase}artist/${id}`);
  }

  obtenerTopCanciones(id: string) {
    return this.http.get(`${this.urlBase}artist/${id}/top?limit=5`);
  }

  obtenerTopAlbumes(id: string) {
    return this.http.get(`${this.urlBase}artist/${id}/albums`);
  }
  
}