import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarOrderComponent } from './orders/asignar-order/asignar-order.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';
import { BuscarVehiculoComponent } from './vehiculos/buscar-vehiculo/buscar-vehiculo.component';
import { CrearVehiculoComponent } from './vehiculos/crear-vehiculo/crear-vehiculo.component';
import { EditarVehiculoComponent } from './vehiculos/editar-vehiculo/editar-vehiculo.component';
import { EliminarVehiculoComponent } from './vehiculos/eliminar-vehiculo/eliminar-vehiculo.component';

const routes: Routes = [
  {
    path: "asignar-order",
    component: AsignarOrderComponent
  },
  {
    path: "crear-usuario",
    component: CrearUsuarioComponent
  },
  {
    path: "editar-usuario",
    component: EditarUsuarioComponent
  },
  {
    path: "eliminar-usuario",
    component: EliminarUsuarioComponent
  },
  {
    path: "buscar-usuario",
    component: BuscarUsuarioComponent
  },
  {
    path: "crear-vehiculo",
    component: CrearVehiculoComponent
  },
  {
    path: "editar-vehiculo",
    component: EditarVehiculoComponent
  },
  {
    path: "eliminar-vehiculo",
    component: EliminarVehiculoComponent
  },
  {
    path: "buscar-vehiculo",
    component: BuscarVehiculoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
