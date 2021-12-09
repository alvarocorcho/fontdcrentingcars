import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloVehiculo } from '../modelos/vehiculo.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  url = `http://localhost:3000`;
  token: String='';

  constructor(private http: HttpClient, private SeguridadServicio: SeguridadService) { 
    this.token = this.SeguridadServicio.ObtenerToken();
  }

  ObtenerRegistros(): Observable<ModeloVehiculo[]> {
    return this.http.get<ModeloVehiculo[]>(`${this.url}/vehiculos`)
  }

  ObtenerRegistrosPorId(id: string): Observable<ModeloVehiculo>{
    return this.http.get<ModeloVehiculo>(`${this.url}/vehiculos/${id}`);
   }

   CrearVehiculo(vehiculo: ModeloVehiculo): Observable<ModeloVehiculo>{
     return this.http.post<ModeloVehiculo>(`${this.url}/vehiculos`, vehiculo,{
       headers: new HttpHeaders({
         'Authorization': `Bearer ${this.token}`
       })
     })
   }

   ActualizarVehiculo(vehiculo: ModeloVehiculo): Observable<ModeloVehiculo>{
     return this.http.put<ModeloVehiculo>(`${this.url}/vehiculos/${vehiculo.id}`, vehiculo,{
        headers: new HttpHeaders({
          'Authorization': `Bearer${this.token}`
        })
     })
   }
   
   EliminarVehiculo(id: string): Observable<any>{
     return this.http.delete(`${this.url}/vehiculos/${id}`,{
       headers: new HttpHeaders({
        'Authorization': `Bearer${this.token}`
       })
     })
   }
}
