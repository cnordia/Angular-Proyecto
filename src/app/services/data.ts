import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RespuestaAPI } from '../interface/data.interface';

@Injectable({providedIn: 'root',})

export class Data {
  private http = inject(HttpClient);

  private urlBase = 'https://api.deezer.com/';
  

  datos = signal<any[]>([]) //El signal actúa como un notificador al cambiar los valores usando .set() a todos los lugares donde se está usando


  buscarArtista(nombre: string) {
    const params = new HttpParams().set('q', nombre).set('limit', '1');

    // Hacemos la petición GET
    //Ponemos solo {params} porque es la manera corta de decir (params:params)
    this.http.get(this.urlBase, { params }).subscribe({
      next: (resultado: any) => {
        this.datos.set(resultado.data[0]); 
      },
      error: (err) => console.error('Error en la API:', err)
    });

  }
}
