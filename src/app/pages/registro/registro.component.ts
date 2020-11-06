import { ThrowStmt } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { formatWithOptions } from 'util';
import { UsuarioModel } from '../../models/usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;

  constructor() {
    this.usuario = new UsuarioModel();
   }

  ngOnInit() { }

  onSubmit( form: NgForm)
  {
    if( form.invalid ) {return;}
    console.log(this.usuario);
    console.log(form);
  }

}
