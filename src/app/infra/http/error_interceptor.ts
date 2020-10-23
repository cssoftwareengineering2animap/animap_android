import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from "@angular/common/http"
import { Router } from "@angular/router"
import { StatusCodes } from "http-status-codes"

import { Observable, throwError } from "rxjs"

import { retry, catchError } from "rxjs/operators"

export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private readonly route: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        if (error.status === StatusCodes.UNAUTHORIZED) {
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
