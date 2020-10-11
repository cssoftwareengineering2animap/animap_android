import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { API_URL } from "../api-url"

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  public buscaUsuario(): Observable<any> {
    return this.http.get(`${API_URL}/usuarios`)
  }
}
