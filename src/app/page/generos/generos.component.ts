import { Component, inject, OnInit } from '@angular/core';
import { Api } from '../../services/api';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-generos',
  imports: [RouterLink],
  templateUrl: './generos.component.html',
  styleUrl: './generos.component.scss',
})
export class GenerosComponent implements OnInit {

  private data = inject(Api)

  generos = this.data.datos;

  ngOnInit() {
    this.data.obtenerGeneros();
  }

}
