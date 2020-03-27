import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // admin user
    // tslint:disable-next-line:max-line-length
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZSwiZXhwIjoiMTgwNDY5OTI1NSJ9.th1wmUvkm6Xffh2tvup5k658RY1FCf2e-GFdqA5V3QM';
    // non-admin user
    // tslint:disable-next-line:max-line-length
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6ZmFsc2UsImV4cCI6IjE4MDQ2OTkyNTUifQ.vMlQ-QK4V57CFZs09hFibZsy8DP8PyejHzI6Xr9YsGk';
    const {url, method, headers, body} = request;

    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith('/api/authenticate') && method === 'POST':
          return authenticate();
        case url.endsWith('/api/orders') && method === 'GET':
          return orders();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    function authenticate() {
      const {email, password} = body;

      if (email === 'mosh@domain.com' && password.toString() === '1234') {
        return ok({
          status: 200,
          token
        });
      } else {
        return error('Username or password is incorrect!!!!@@@!!!');
      }
    }

    function orders() {
      if (headers.get('Authorization') === 'Bearer ' + token) {
        return ok({status: 200, body: [1, 2, 3]});
      } else {
        unauthorized();
      }
    }

    function ok(body?) {
      return of(new HttpResponse({status: 200, body}));
    }

    function unauthorized() {
      return throwError({status: 401, error: {message: 'Unauthorised'}});
    }

    function error(message) {
      return throwError({error: {message}});
    }
  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
