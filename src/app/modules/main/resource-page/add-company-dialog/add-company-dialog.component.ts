import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/shared/models/Company.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-company-dialog',
  templateUrl: './add-company-dialog.component.html',
  styleUrls: ['./add-company-dialog.component.css']
})
export class AddCompanyDialogComponent implements OnInit {
  company: Company;

  constructor(public dialogRef: MatDialogRef<AddCompanyDialogComponent>) { }

  ngOnInit() {
    this.company = {name:"", resourceAmount:0, id:null, userId:null}
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
