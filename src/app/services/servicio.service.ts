import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private url: string = environment.url;

  constructor(private http: HttpClient) {}

  getUbicaciones(): Observable<any>
  {
    return this.http.get(`${this.url}api/empleado`)
  }

  postUbicaciones(body): Observable<any>
  {
    return this.http.post(`${this.url}api/empleado`,body)
  }


}
