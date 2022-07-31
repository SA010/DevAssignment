import { Component, OnInit } from '@angular/core';
import { CompaniesCustomApiService } from '../Shared/Services/companies-custom-api.service';
import { CompanyDto } from '../Shared/Services/CompaniesApi';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.sass']
})
export class CompaniesComponent implements OnInit {
  showOnlyWithVacance = true;
  companies: CompanyDto[] | undefined;

  constructor(private api: CompaniesCustomApiService) { }

  ngOnInit(): void {
    this.getCompaniesData();
  }

  getCompaniesData(){
    this.api.getCompanies(this.showOnlyWithVacance)
          .subscribe((companies: CompanyDto[]) => this.companies = companies);
  }

}
