import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';
import { LoginGuard } from './login.guard';
const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'productos', component: ProductosComponent, canActivate: [LoginGuard]},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
