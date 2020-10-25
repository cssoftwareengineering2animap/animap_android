import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from "@angular/common/http"
import { Inject, Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { StatusCodes } from "http-status-codes"

import { Observable, throwError } from "rxjs"

import { retry, catchError } from "rxjs/operators"
import { StorageToken, Storage } from "../../domain/providers/storage"

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private readonly route: Router,
    @Inject(StorageToken)
    private readonly storage: Storage
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        if (error.status === StatusCodes.UNAUTHORIZED) {
          this.storage.clear()
          this.route.navigate(["/login"])
        }

        return throwError(
          Array.isArray(error.error)
            ? error.error
            : [{ message: "Algo não deu certo, tente novamente mais tarde" }]
        )
      })
    )
  }
}
