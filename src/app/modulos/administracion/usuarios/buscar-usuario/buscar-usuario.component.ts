import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css']
})
export class BuscarUsuarioComponent implements OnInit {

  listadoRegistros : ModeloUsuario[] = [];
  
  constructor(private usuarioServicio: UsuarioService) { }

  ngOnInit(): void {
    this.ObtenerListadoUsuarios();
  }
/*
  ObtenerRegistrosPorId(id: string): Observable<ModeloUsuario>{
    return this.http.get<ModeloUsuario>(`${this.url}/usuarios/${id}`);
   }
*/ 
  ObtenerListadoUsuarios(){
    this.usuarioServicio.ObtenerRegistros().subscribe((datos: ModeloUsuario[])=>{
      this.listadoRegistros = datos;
    })
  }
 
}