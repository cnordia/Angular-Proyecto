import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';
import { GenerosComponent } from './page/generos/generos.component';
import { PopuGeneroComponent } from './page/popu-genero/popu-genero.component';
import { FormularioComponent } from './page/formulario/formulario.component';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'generos', component:GenerosComponent},
    {path:'popuGeneros/:id', component:PopuGeneroComponent},
    {path:'formulario', component:FormularioComponent}

];
