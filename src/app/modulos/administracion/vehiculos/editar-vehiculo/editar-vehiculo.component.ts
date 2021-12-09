import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-editar-vehiculo',
  templateUrl: './editar-vehiculo.component.html',
  styleUrls: ['./editar-vehiculo.component.css']
})
export class EditarVehiculoComponent implements OnInit {

  id: string = "";

  fgValidador: FormGroup=this.fb.group({
    'id':['',[Validators.required]],
    'categoria':['',[Validators.required]],
    'marca':['',[Validators.required]],
    'edicion':['',[Validators.required]],
    'modelo':['',[Validators.required]],
    'color':['',[Validators.required]],
    'precioDia':['',[Validators.required]],
    'imagen':['',[Validators.required]],
    'estado':['',[Validators.required]]
  })
 
  constructor(private fb: FormBuilder,
    private servicioVehiculo: VehiculoService,
    private router: Router, 
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarVehiculo();
  }

  BuscarVehiculo(){
    this.servicioVehiculo.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloVehiculo) =>{
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["categoria"].setValue(datos.categoria);
      this.fgValidador.controls["marca"].setValue(datos.marca);
      this.fgValidador.controls["edicion"].setValue(datos.edicion);
      this.fgValidador.controls["modelo"].setValue(datos.modelo);
      this.fgValidador.controls["color"].setValue(datos.color);
      this.fgValidador.controls["precioDia"].setValue(datos.precioDia);
      this.fgValidador.controls["imagen"].setValue(datos.imagen);
      this.fgValidador.controls["estado"].setValue(datos.estado);
    });
  }

  EditarVehiculo(){
    let categoria = this.fgValidador.controls["categoria"].value;
    let marca = this.fgValidador.controls["marca"].value;
    let edicion = this.fgValidador.controls["edicion"].value;
    let modelo = this.fgValidador.controls["modelo"].value;
    let color = this.fgValidador.controls["color"].value;        
    let precioDia = parseInt(this.fgValidador.controls['precioDia'].value);
    let imagen = this.fgValidador.controls["imagen"].value;
    let estado = this.fgValidador.controls["estado"].value;

    let v = new ModeloVehiculo();
    v.categoria= categoria;
    v.marca= marca;
    v.edicion= edicion;
    v.modelo= modelo;
    v.color= color;
    v.precioDia= precioDia;
    v.imagen= imagen;
    v.estado= estado;
    v.id = this.id;

   this.servicioVehiculo.ActualizarVehiculo(v).subscribe((datos: ModeloVehiculo) =>{ 
    alert("**INFORMACION DEL VEHICULO ACTUALIZADA");
    /* this.router.navigate(["/administracion/listar-vehiculo"]); */
      this.router.navigate(["/administracion/buscar-vehiculo"]);
    }, (error: any)=>{
      alert("**ERROR AL ACTUALIZAR INFORMACION DEL VEHICULO");
    })
  }
}

