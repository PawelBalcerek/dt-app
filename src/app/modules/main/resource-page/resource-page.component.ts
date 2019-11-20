import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/core/services/resource.service';
import { AddCompanyDialogComponent } from './add-company-dialog/add-company-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CompanyService } from 'src/app/core/services/company.service';

@Component({
  selector: 'app-resource-page',
  templateUrl: './resource-page.component.html',
  styleUrls: ['./resource-page.component.css']
})
export class ResourcePageComponent implements OnInit {

  constructor(public resourceService: ResourceService,
    public comapnyService: CompanyService,
    public dialog: MatDialog ) { }

  ngOnInit() {
    this.resourceService.getResources();
  }

  openAddDialog(){
    const dialogRef = this.dialog.open(AddCompanyDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if( result!=null ){
        this.comapnyService.addNewCompany(result);
       // this.buyOffersService.addBuyOffer( result );
      }
      
    });
  }

}
