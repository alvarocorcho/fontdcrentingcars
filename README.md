# FrontDcang

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


ADICIONO BORRADOR FORMULARIO REGISTRO DE CLIENTES: CREAR-USUARIO HTML
<p>crear-usuario works!</p>
<div class="row">
    <h4>FORMULARIO DE REGISTRO CLIENTES</h4>
        <form [formGroup]="fgValidador" class= "col s12" (ngSubmit)="GuardarUsuario()">
            <div class="input-field col s6">
                <label for="nombres">nombres</label>
                <input formControlName="nombres" type="text" id="nombres" name="nombres" required>
            </div>
            <div class="input-field col s6">
                <label for="apellidos">apellidos</label>
                <input formControlName="apellidos" type="text" id="apellidos" name="apellidos" required>
            </div>
            
            <div class="row">
                <div class="input-field col s3">
                    <select class="browser-default" formControlName= "tipoDocumento" type="text" id="tipoDocumento" name=" tipoDocumento" required>
                    <option value="" disabled selected>tipo Documento</option>
                    <option value="CC">CEDULA DE CIUDADANIA</option>
                    <option value="TI">TARJETA DE IDENTIDAD</option>
                    <option value="PAS">PASAPORTE</option>
                    <option value="PE">PERMISO ESPECIAL</option>
                    </select>
                </div>
                <div class="input-field col s4">
                    <label for="documento">Numero de Documento</label>
                    <input formControlName="documento" type="text" id="documento" name="documento" required>
                </div>
                <div class="input-field col s5">
                    <input formControlName="email" type="email" id= "email" class="validate" name="email" required>
                    <label for="email">Correo Electronico</label>
                    <span class="helper-text" data-error="formato correo electronico errado" data-success="Formato correo electronico correcto">correo@ejemplo.com</span>
                </div>
            </div>

            <div class="row">
                <div class="row">
                    <div class="input-field col s6">
                        <label for="direccion">Direccion</label>
                        <input formControlName="direccion" type="text" id="direccion" name="direccion" required>
                        </div>
                    <div class="input-field col s3">
                        <label for="telefono1">Telefono</label>
                        <input formControlName="telefono1" type="text" id="telefono1" name="telefono1" required>
                        </div>
                    <div class="input-field col s3">
                        <label for="telefono2">Telefono 2</label>
                        <input formControlName="telefono2" type="text" id="telefono2" name="telefono2"  value ="0">
                    </div>
                </div>
            </div>
            
            <p class="center">
                <button class="waves-effect waves-light btn" type="submit">
                    <i class="material-icons right">send</i>Crear Usuario
                </button>
                &nbsp;<a routerLink="/inicio" class="btn btn-warning red">Cancelar</a>
            </p>

        </form>
</div>        

<!-- [disabled]="!fgValidador.valid" -->


CREAR-USUARIO.TS
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
  fgValidador: FormGroup=this.fb.group({
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
      rolId= rolId;
      nombres = nombres;
      apellidos = apellidos;
      tipoDocumento = tipoDocumento;
      documento = documento;
      direccion = direccion;
      telefono1 = telefono1;
      telefono2 = telefono2;
      email = email;


      this.servicioUsuario.CrearUsuario(u).subscribe((datos: ModeloUsuario) =>{ 
        alert("**USUARIO CREADO CORRECTAMENTE");
          this.router.navigate(["/inicio"]);
        }, (error: any)=>{
          alert("**VERIFIQUE LA INFORMACION, ERROR AL CREAR EL USUARIO");
        })

  }

}
