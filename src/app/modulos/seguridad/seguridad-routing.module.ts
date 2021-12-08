import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambioClaveComponent } from './cambioclave/cambioclave.component';
import { CerrarSesionComponent } from './cerrarsesion/cerrarsesion.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';

const routes: Routes = [
    {
      path: "identificar",
      component: IdentificacionComponent
    },
    {
      path:"cambioclave",
      component: CambioClaveComponent
    },
    {
      path:"recuperar-clave",
      component: RecuperarClaveComponent
    },
    {
      path:"cerrarsesion",
      component: CerrarSesionComponent
    }
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
