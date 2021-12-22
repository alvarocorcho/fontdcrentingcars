import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloRecuperar } from 'src/app/modelos/recuperar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.css']
})
export class RecuperarClaveComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'usuario': ['',[Validators.required, Validators.email]]
  })

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router) { }

  ngOnInit(): void {

  }

  RecuperarClave (){
    let usuario = this.fgValidador.controls["usuario"].value;

    let r = new ModeloRecuperar();
      r.correo = usuario;

    this.servicioSeguridad.Recuperar(usuario).subscribe((datos:any) => {
      this.router.navigate(["/inicio"]);
      //alert("Datos Correctos")
    }, (error: any)=> {
      alert("Datos Correo Electrónico Inválido")
    })


  }

}