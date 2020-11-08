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

  lat =   20.4179075;

  lng = -87.9156008;


  public origin: any;
  public destination: any;

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar, private servicio :ServicioService) {


  }


  ngOnInit(): void {
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
      width: '250px',
      data: {},
    });
  }

}
