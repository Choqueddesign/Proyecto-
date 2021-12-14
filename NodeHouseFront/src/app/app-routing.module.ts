import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestacadosComponent } from './components/destacados/destacados.component';
import { HomeComponent } from './components/home/home.component';
import { InmueblesComponent } from './components/inmuebles/inmuebles.component';
import { LoginComponent } from './components/login/login.component';
import { VoidComponent } from './components/void/void.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"destacados", component: DestacadosComponent},
  {path:"inmuebles", component: InmueblesComponent},
  {path:"login", component: LoginComponent},
  {path:"**", component: VoidComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
