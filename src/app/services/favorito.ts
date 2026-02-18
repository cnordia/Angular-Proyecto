import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  private key = 'mis_artistas_favoritos'; // Nombre de la clave en localStorage

  // 1. OBTENER TODOS LOS FAVORITOS
  getFavoritos(): any[] {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : [];
  }

  addFavorito(artista: any) {
    const lista = this.getFavoritos();
    // Evitamos duplicados
    if (!this.existe(artista.id)) {
      lista.push(artista);
      this.guardar(lista);
    }
  }

  removeFavorito(id: any) {
    let lista = this.getFavoritos();
    // Filtramos para quedarnos con todos MENOS el que queremos borrar
    lista = lista.filter(item => item.id !== id);
    this.guardar(lista);
  }

  existe(id: any): boolean {
    const lista = this.getFavoritos();
    return lista.some(item => item.id === id);
  }

  private guardar(lista: any[]) {
    localStorage.setItem(this.key, JSON.stringify(lista));
  }
}