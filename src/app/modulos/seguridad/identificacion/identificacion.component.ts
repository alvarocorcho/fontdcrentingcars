import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'usuario': ['',[Validators.required, Validators.email]],
    'clave': ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router) { }

  ngOnInit(): void {
    /* this.fgValidador.controls["usuario"].setValue("Hola: ") */
    /* setInterval(() => {
      this.fgValidador.controls["usuario"].setValue(Math.random() *1000)
    }, 2000) */
  }
  IdentificarUsuario (){
    let usuario = this.fgValidador.controls["usuario"].value;
    let clave = this.fgValidador.controls["clave"].value;
    /* alert(usuario)
    alert(clave) */
    let claveCifrada = CryptoJS.MD5(clave).toString();

    this.servicioSeguridad.Identificar(usuario, claveCifrada).subscribe((datos:any) => {
      this.servicioSeguridad.AlmacenarSesion(datos);
      this.router.navigate(["/inicio"]);
      //alert("Datos Correctos")
    }, (error: any)=> {
      alert("Datos Invalidos")
    })


  }

}