import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/core/services/resource.service';

@Component({
  selector: 'app-resource-page',
  templateUrl: './resource-page.component.html',
  styleUrls: ['./resource-page.component.css']
})
export class ResourcePageComponent implements OnInit {

  constructor(public resourceService: ResourceService ) { }

  ngOnInit() {
    this.resourceService.getResources();
  }

}
