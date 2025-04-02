import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable()
export class MyErrorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {

        let errorMessage = 'Error';

        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `Server Error : ${error.status} \n ${error.message}`;
        }

        Swal.fire({
          title: "Error",
          text: errorMessage,
          timer: 4000,
          icon: 'error',
        }).then(()=>{
          this.router.navigate([''])
        })
        console.error('Intercepted Error:', error);

        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
