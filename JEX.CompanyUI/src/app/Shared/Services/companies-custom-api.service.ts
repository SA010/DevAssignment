import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { CompanyDto } from './CompaniesApi';

@Injectable({
  providedIn: 'root',
})
export class CompaniesCustomApiService {

  base_url = 'http://localhost:5283/';
  companies_url = `${this.base_url}api/Companies`;

  constructor(private http: HttpClient) {}

  getCompanies(onlyWithVacance: boolean): Observable<CompanyDto[]> {
    return this.http.get<CompanyDto[]>(`${this.companies_url}?hideWhenNoVacancy=${onlyWithVacance}`)
      //.pipe(catchError(this.handleError));
  }

  getCompanyById(id: number): Observable<CompanyDto> {
    return this.http.get<CompanyDto>(`${this.companies_url}/${id}`)
      //.pipe(catchError(this.handleError));
  }

  // private handleError(error: any) {
  //   console.error('server error:', error);
  //   if (error.error instanceof Error) {
  //     const errMessage = error.error.message;
  //     return Observable.throw(errMessage);
  //   }
  //   return Observable.throw(error || 'Server error');
  // }
}
