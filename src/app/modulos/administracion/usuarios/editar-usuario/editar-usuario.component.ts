import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  id: string = "";
  rolId: string = "";

  fgValidador: FormGroup=this.fb.group({
    'id':['',[Validators.required]],
    'rolId':['',[Validators.required]],
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
    private router: Router, 
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.rolId = this.route.snapshot.params["rolId"];
    this.BuscarUsuario();
  }

  BuscarUsuario(){
    this.servicioUsuario.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloUsuario) =>{
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["rolId"].setValue(datos.rolId);
      this.fgValidador.controls["nombres"].setValue(datos.nombres);
      this.fgValidador.controls["apellidos"].setValue(datos.apellidos);
      this.fgValidador.controls["tipoDocumento"].setValue(datos.tipoDocumento);
      this.fgValidador.controls["documento"].setValue(datos.documento);
      this.fgValidador.controls["direccion"].setValue(datos.direccion);
      this.fgValidador.controls["telefono1"].setValue(datos.telefono1);
      this.fgValidador.controls["telefono2"].setValue(datos.telefono2);
      this.fgValidador.controls["email"].setValue(datos.email);
    });
  }

  EditarUsuario(){
    let nombres = this.fgValidador.controls["nombres"].value;
    let apellidos = this.fgValidador.controls["apellidos"].value;
    let tipoDocumento = this.fgValidador.controls["tipoDocumento"].value;
    let documento = this.fgValidador.controls["documento"].value;
    let direccion = this.fgValidador.controls["direccion"].value;        
    let telefono1 = (this.fgValidador.controls['telefono1'].value);
    let telefono2 = this.fgValidador.controls["telefono2"].value;
    let email = this.fgValidador.controls["email"].value;
    let rolId = "61929dfd34b7c36ed0c62a71";

    let u = new ModeloUsuario();
    u.nombres= nombres;
    u.apellidos= apellidos;
    u.tipoDocumento= tipoDocumento;
    u.documento= documento;
    u.direccion= direccion;
    u.telefono1= telefono1;
    u.telefono2= telefono2;
    u.email= email;
    u.id = this.id;
    u.rolId = rolId;

   this.servicioUsuario.ActualizarUsuario(u).subscribe((datos: ModeloUsuario) =>{ 
    alert("**INFORMACION ACTUALIZADA CORRECTAMENTE");
      this.router.navigate(["/administracion/buscar-usuario"]);
    }, (error: any)=>{
      alert("**ERROR AL ACTUALIZAR LA INFORMACION");
    })
  }
}

