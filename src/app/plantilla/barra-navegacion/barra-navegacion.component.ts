import { Component, OnInit } from '@angular/core';
import { ModeloIdentificar } from './../../modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  seInicioSesion: boolean= false;

  subs: Subscription= new Subscription();
  constructor(private SeguridadServicio: SeguridadService) { }

  ngOnInit(): void {
    this.subs = this.SeguridadServicio.ObtenerDatosUsuarioEnSesion().subscribe((datos:ModeloIdentificar) => {
     this.seInicioSesion=datos.siestaIdentificado;
      if(datos.siestaIdentificado){
        this.seInicioSesion= true;
      }else {
        this.seInicioSesion= false;
      }
    })
  }

}