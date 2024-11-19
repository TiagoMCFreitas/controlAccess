import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../types/user.type';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private token: string | null = null;
  apiUrl = 'http://localhost:8080/api/usuario/'

  constructor(private _http : HttpClient) { }


  setToken(token: string): void {
    this.token = token;
  }
  getUserByToken():  Observable<IUser>{

    return this._http.get<IUser>(this.apiUrl + "profile");
  }
  getToken(): string | null {
    return this.token;
  }

  getUsers(): Observable<IUser[]>{
    return this._http.get<IUser[]>(this.apiUrl);
  }

  storeUser(usuario: IUser): Observable<IUser>{
    return this._http.post<IUser>(this.apiUrl, usuario);
  }


}
