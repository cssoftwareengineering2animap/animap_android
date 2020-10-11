import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { environment } from "../../../../environments/environment"
import { CadastroPet } from "./cadastro-pet.model"

@Injectable()
export class CadastroPetService {
  constructor(private http: HttpClient) {}

  cadastraPet(cadastro: CadastroPet): Observable<CadastroPet> {
    return this.http.post<CadastroPet>(`${environment.apiUrl}/pets`, cadastro)
  }
}
