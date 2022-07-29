import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { CompanyDto } from './CompaniesApi';

@Injectable({
  providedIn: 'root'
})
export class CompaniesCustomApiService {
  //base_url: string;
  private base_url = 'http://localhost:5283/'
  constructor(private http: HttpClient) {

  }

  getCompanies(onlyWithVacance: boolean): Observable< Map<boolean, CompanyDto>> {
    return this.http.get<Map<boolean, CompanyDto>>(`${this.base_url}/api/Companies?onlyWithVacance=${onlyWithVacance}`);
  }
}
