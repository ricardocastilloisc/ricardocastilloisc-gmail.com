import { ThrowStmt } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { formatWithOptions } from 'util';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit( form: NgForm)
  {
    if( form.invalid ) {return;}
    this.auth.nuevoUsuario(this.usuario)
    .subscribe( resp =>
      {
        console.log(resp);
      },
      (err) => {
        console.log(err.error.error.message);
      });
  }

}
