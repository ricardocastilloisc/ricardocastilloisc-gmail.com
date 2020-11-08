import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-altamarcador',
  templateUrl: './altamarcador.component.html',
  styleUrls: ['./altamarcador.component.css']
})
export class AltamarcadorComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<AltamarcadorComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
  }

}
