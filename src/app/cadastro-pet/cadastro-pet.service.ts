import { CadastroPet } from './cadastro-pet.model';
import { API_URL } from './../api-url';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CadastroPetService {
    constructor(private http: HttpClient) {}
    
    cadastraPet(cadastro: CadastroPet): Observable<CadastroPet> {
        return this.http.post<CadastroPet>(`${API_URL}/pets`, cadastro);
    }
}