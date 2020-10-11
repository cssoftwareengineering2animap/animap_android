import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { API_URL } from "../api-url"
import { CadastroPet } from "./cadastro-pet.model"

@Injectable()
export class CadastroPetService {
  constructor(private http: HttpClient) {}

  cadastraPet(cadastro: CadastroPet): Observable<CadastroPet> {
    return this.http.post<CadastroPet>(`${API_URL}/pets`, cadastro)
  }
}
