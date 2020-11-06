import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:'
  private apikey  = 'AIzaSyCcfUJDaTKunHiKCbUYMaMquRK3zx4PkOA'

  //crear session
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //iniciar sesion
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor( private http: HttpClient) { }

  logout(){}

  login(usuario : UsuarioModel){}

  nuevoUsuario( usuario: UsuarioModel){
    const authData = {
      ...usuario,
      returnSecureToken:true
    };

    return this.http.post(
    `${this.url}signUp?key=${this.apikey}`,
    authData
    );
  }

}
