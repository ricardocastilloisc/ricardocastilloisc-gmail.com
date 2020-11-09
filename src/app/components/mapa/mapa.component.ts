import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Marcador } from '../../classes/marcador.class';
import { AltamarcadorComponent } from '../../dialog/altamarcador/altamarcador.component';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];

  lineas: any[] = [];

  lat =   20.4179075;

  lng = -87.9156008;


  public origin: any;
  public destination: any;

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar, private servicio :ServicioService) {


  }


  ngOnInit(): void {
    this.CargarMarcadores();
  }


  CargarMarcadores()
  {
    const nuevoMarcador = new Marcador(20.4179075,-87.9156008,'Quintana Roo', 'Quintana Roo');
    this.marcadores.push(nuevoMarcador);

    this.servicio.getUbicaciones().subscribe( res =>
      {
        let arreglo: any[]  = res.recordset;
        for (let i = 0; i < arreglo.length; i++) {
          const nuevoMarcadorRespo = new Marcador(
           Number(arreglo[i].a.trim()),
           Number(arreglo[i].b.trim()),
            arreglo[i].id.trim(),
            arreglo[i].c.trim()
            );
          this.marcadores.push(nuevoMarcadorRespo);
       }
       if(this.marcadores.length % 2 == 0) {
        //return "par";

        for(let x = 0; x < arreglo.length; x = x+2)
        {

          this.lineas.push(
            {
              latA: this.marcadores[x].lat,
              lngA: this.marcadores[x].lng,
              latB: this.marcadores[x+1].lat,
              lngB: this.marcadores[x+1].lng,
            }
            );
        }
    }else {
        for(let x = 0; x < arreglo.length - 1; x = x+2)
        {
          this.lineas.push(
            {
              latA: this.marcadores[x].lat,
              lngA: this.marcadores[x].lng,
              latB: this.marcadores[x+1].lat,
              lngB: this.marcadores[x+1].lng,
            }
            );
        }
      }

      console.log(this.lineas);
      });
  }

/*
  agregarMarcador( evento ) {

    const coords: { lat: number, lng: number } = evento.coords;

    const nuevoMarcador = new Marcador( coords.lat, coords.lng );

    this.marcadores.push( nuevoMarcador );

    this.snackBar.open('Marcador agregado', 'Cerrar', { duration: 3000 });

  }
*/
  dialogoAlta() {
    const dialogRef = this.dialog.open(AltamarcadorComponent, {
      width: '800px',
      height: '100%',
      data: {},
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {

          const body = {
            id: res.nombrelugar,
            aa: res.latitud,
            bb: res.longitud
          }

          this.servicio.postUbicaciones(body).subscribe((res) => {
            this.CargarMarcadores();
            this.snackBar.open('Marcador agregado', 'Cerrar', { duration: 3000 });
          });


        }
      }
    );
  }



}
