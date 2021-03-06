import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Company } from 'src/app/shared/models/Company.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private _companies:BehaviorSubject<Company[]> = new BehaviorSubject<Company[]>(null);
  public  readonly company_0: Observable<Company[]> = this._companies.asObservable();

  constructor(private http: HttpClient, 
              public resourceService:ResourceService) { }

  public getCompanies(){
    let api = environment.apiUrl + "companies"; 

    this.http.get<Company[]>( api )
      .subscribe((data:any)=>{
        let companies: Company[] = data.companies;
        this._companies.next( companies );
      });
  }

  public addNewCompany(company: Company){
    let api = environment.apiUrl + "companies"; 

    this.http.post<Company[]>( api, company )
      .subscribe((data:any)=>{
        this.resourceService.getResources();
      });
  }

  
}
