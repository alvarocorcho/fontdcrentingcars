import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})

export class CrearUsuarioComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'nombres':['',[Validators.required]],
    'apellidos':['',[Validators.required]],
    'tipoDocumento':['',[Validators.required]],
    'documento':['',[Validators.required]],
    'direccion':['',[Validators.required]],
    'telefono1':['',[Validators.required]],
    'telefono2':['',[Validators.required]],
    'email':['',[Validators.required]],
  })

  constructor(private fb: FormBuilder,
    private servicioUsuario: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {

  }

  

  GuardarUsuario(){
    let nombres = this.fgValidador.controls["nombres"].value;
    let apellidos = this.fgValidador.controls["apellidos"].value;
    let tipoDocumento = this.fgValidador.controls["tipoDocumento"].value;
    let documento = this.fgValidador.controls["documento"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let telefono1 = this.fgValidador.controls["telefono1"].value;
    let telefono2 = this.fgValidador.controls["telefono2"].value;
    let email = this.fgValidador.controls["email"].value;
    let rolId = "61929dfd34b7c36ed0c62a71";

    let u = new ModeloUsuario();
      u.rolId= rolId;
      u.nombres = nombres;
      u.apellidos = apellidos;
      u.tipoDocumento = tipoDocumento;
      u.documento = documento;
      u.direccion = direccion;
      u.telefono1 = telefono1;
      u.telefono2 = telefono2;
      u.email = email;


      this.servicioUsuario.CrearUsuario(u).subscribe((datos: ModeloUsuario) =>{ 
        alert("**USUARIO CREADO CORRECTAMENTE");
          this.router.navigate(["/inicio"]);
        }, (error: any)=>{
          alert("**VERIFIQUE LA INFORMACION, ERROR AL CREAR EL USUARIO");
        })

  }

}
