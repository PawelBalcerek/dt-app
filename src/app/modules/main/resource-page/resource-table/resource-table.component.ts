import { Component, OnInit, Input } from '@angular/core';
import { Resource } from 'src/app/shared/models/Resource.model';

@Component({
  selector: 'app-resource-table',
  templateUrl: './resource-table.component.html',
  styleUrls: ['./resource-table.component.css']
})
export class ResourceTableComponent implements OnInit {
  
  private displayedColumns: string[] = ['id', 'amount', 'companyName', 'companyId' ];
  private _resources: Resource[] = [];
  @Input("resources") set resources(value:Resource[]){
    if( value ){
      this._resources = value;
    }else{
      this._resources = [];
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
