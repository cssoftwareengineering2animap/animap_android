import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from "@angular/common/http"

import { Observable, throwError } from "rxjs"

import { retry, catchError } from "rxjs/operators"

export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) =>
        throwError(
          Array.isArray(error.error)
            ? error.error
            : [{ message: "Algo não deu certo, tente novamente mais tarde" }]
        )
      )
    )
  }
}
