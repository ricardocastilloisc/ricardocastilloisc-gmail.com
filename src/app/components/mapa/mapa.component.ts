import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  lat = 18.6744431;
  lng = -88.4009275;


  constructor() {

  }

  ngOnInit(): void {
  }

}
