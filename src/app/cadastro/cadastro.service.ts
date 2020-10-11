import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Cadastro } from "./cadastro.model"
import { API_URL } from "../api-url"

@Injectable()
export class CadastroService {
  constructor(private http: HttpClient) {}

  cadastraUsuario(cadastro: Cadastro): Observable<Cadastro> {
    return this.http.post<Cadastro>(`${API_URL}/usuarios`, cadastro)
  }
}
