import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { environment } from "../../../../../environments/environment"

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  public buscaUsuario(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/uses`)
  }
}
