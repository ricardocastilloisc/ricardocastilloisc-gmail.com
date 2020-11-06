import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private url = ''
  private apikey  = 'AIzaSyCcfUJDaTKunHiKCbUYMaMquRK3zx4PkOA'

  //crear session
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //iniciar sesion
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor( private http: HttpClient) { }

  logout(){}

  login(usuario : UsuarioModel){}

  nuevoUusuario( usuario: UsuarioModel){}

}
