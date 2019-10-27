import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatInputModule,
  ], 
  exports:[
    MatToolbarModule, 
    MatButtonModule,
    MatInputModule
  ]
})
export class AngularMaterializeModule { }
