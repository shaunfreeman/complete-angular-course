import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';

export class DataService {
  constructor(private url: string, private http: HttpClient) { }

  private static handleError(error: HttpErrorResponse) {
    if (error.status === 400) {
      return throwError(new BadInput());
    }

    if (error.status === 404) {
      return throwError(new NotFoundError(error));
    }

    return throwError(new AppError(error));
  }

  getAll() {
    return this.http.get(this.url);
  }

  create(resource) {
    return this.http.post(this.url, resource)
      .pipe(catchError(DataService.handleError));
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, { isRead: true })
      .pipe(catchError(DataService.handleError));
  }

  delete(id) {
    return  this.http.delete(this.url + '/' + id)
      .pipe(catchError(DataService.handleError));
  }
}
