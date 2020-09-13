import { API_URL } from './../api-url';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class LoginService {
    constructor(private http: HttpClient) {}
    

    public buscaUsuario() : Observable<any> {
        return this.http.get(`${API_URL}/usuarios`);
    }
}