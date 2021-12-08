import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-cerrarsesion',
  templateUrl: './cerrarsesion.component.html',
  styleUrls: ['./cerrarsesion.component.css']
})
export class CerrarSesionComponent implements OnInit {

  constructor(private servicioSeguridad: SeguridadService, 
    private router: Router) { }
  

  ngOnInit(): void {
    this.servicioSeguridad.EliminarInformacionSesion();
    this.router.navigate(['/inicio'])
  }

}