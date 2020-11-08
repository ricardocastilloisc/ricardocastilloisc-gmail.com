import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-altamarcador',
  templateUrl: './altamarcador.component.html',
  styleUrls: ['./altamarcador.component.css']
})
export class AltamarcadorComponent implements OnInit {

  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;

  nombreLugar;
  latitud;
  longitud;


  constructor( public dialogRef: MatDialogRef<AltamarcadorComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any) {
     }

  ngOnInit(): void {
  }


  confirmarRegistro() {
    const datos = {
      latitud: this.latitud,
      longitud: this.longitud,
      nombrelugar: this.nombreLugar
    };
    this.dialogRef.close(datos);
  }

}
