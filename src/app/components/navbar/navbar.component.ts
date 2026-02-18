import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { DateTime } from 'luxon';

//RouterLink cambia la vista instatáneamente sin recargar, no como el href, que este recarga la página(parpadeo en blanco)
//RouterLinkActivate mira la URL actual y, si coincide con el enlace, le añade una clase CSS (por defecto es active)
//Router se usa cuando quieres navegar después de que pase algo lógico (como terminar de rellenar un formulario o pulsar Enter en un buscador)


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  private router = inject(Router) 

  horaActual = signal('');

  buscarInput(texto:string){
    if(texto.trim()){

      //Busca en el localhost4400/buscar y le pasa ciertos parámetros
      //El navigate se encarga de verificar, entrar/salir si tiene permisos, "traduce" la url para que no haya problema, cambia la url sin recargar y quita una vista y pone otra
      this.router.navigate(['/buscar'],{queryParams: {q : texto}});
    }
  }

  ngOnInit() {
    setInterval(() => {
      this.horaActual.set(
        DateTime.now().setLocale('es').toLocaleString(DateTime.TIME_24_WITH_SECONDS)
      );
    }, 1000);

  }
}
