import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/User.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input("user") _user:User; 

  constructor() { }

  ngOnInit() {
  }

}
