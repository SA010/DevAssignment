import { Component, OnInit } from '@angular/core';
import { CompaniesCustomApiService } from '../Shared/Services/companies-custom-api.service'

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.sass']
})
export class CompaniesComponent implements OnInit {
 showOnlyWithVacance = true;
  constructor(private api: CompaniesCustomApiService) { }

  ngOnInit(): void {
    this.getCompaniesData();
  }

  // this.globalSettingsService.initSettings().then(
  //   () => {console.log('language loaded'); }
  // );

  getCompaniesData(){
    this.api.getCompanies(this.showOnlyWithVacance).subscribe({
      next: (companies) => {
       console.log(companies);
      },
      error: err => {
        console.dir(err);
      }
    });
  }

}
