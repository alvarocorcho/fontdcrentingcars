import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.css']
})
export class CrearVehiculoComponent implements OnInit {
  fgValidador: FormGroup=this.fb.group({
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
    private router: Router) { }

  ngOnInit(): void {
  }
  GuardarVehiculo(){
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

   this.servicioVehiculo.CrearVehiculo(v).subscribe((datos: ModeloVehiculo) =>{ 
    alert("**INFORMACION DEL VEHICULO ALMACENADA CORRECTAMENTE");
    /* this.router.navigate(["/administracion/listar-vehiculo"]); */
      this.router.navigate(["/administracion/buscar-vehiculo"]);
    }, (error: any)=>{
      alert("**ERROR AL GRABAR INFORMACION DEL VEHICULO");
    })
  }
}

