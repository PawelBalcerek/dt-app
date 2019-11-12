import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from "@angular/material/table"
import {MatSelectModule} from '@angular/material/select'
import { MatDialogModule } from "@angular/material/dialog";


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,
  ], 
  exports:[
    MatToolbarModule, 
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,
  ]
})
export class AngularMaterializeModule { }
