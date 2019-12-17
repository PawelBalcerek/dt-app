import { Component, OnInit } from '@angular/core';
import { Testservice } from 'src/app/core/services/tests.service';
import { ReportsService } from 'src/app/core/services/reports.service';
import { Tests } from 'src/app/shared/models/Tests/tests';
import { Reports } from 'src/app/shared/models/Tests/reports';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users-endpoint-execution-times',
  templateUrl: './users-endpoint-execution-times.component.html',
  styleUrls: ['./users-endpoint-execution-times.component.css']
})
export class UsersEndpointExecutionTimesComponent implements OnInit {
  selectedTestParameter : Tests.TestParameters;
  selectedEndpoint: Reports.Endpoint; 

  usersEndpointExecutionTimes: Reports.UserEndpointExecutionTimes[];
  userEndpointExecutionTimes$: Subscription;
  selectedUserEndpointExecutionTimes: Reports.UserEndpointExecutionTimes = null;

  users: number[] = [];
  selectedUser: number;

  constructor(public testService: Testservice, public reportService:ReportsService) { }

  ngOnInit() {
    
    this.testService.getTestsParameters();
    this.reportService.getEndpoints();

    this.userEndpointExecutionTimes$ = this.reportService.usersEndpointExecutionTimes_0
      .subscribe( (uET: Reports.UserEndpointExecutionTimes[])=>{
          if(uET!=null && uET.length>0){
            this.usersEndpointExecutionTimes = uET;
            this.users = uET.map(x => x.userId );
            this.selectedUser = this.users[0];
            this.userChanged();
          }else{
            this.users=[];
            this.selectedUser = null;
            this.selectedUserEndpointExecutionTimes = null;
          }
      })
  }

  getData(){
    if( this.selectedEndpoint!=null && this.selectedTestParameter!=null ){
      this.reportService.getUsersEndpointExecutionTimes(this.selectedTestParameter.testParametersId, this.selectedEndpoint.endpointId );
    }
  }

  userChanged(){
    const uETIndex = this.usersEndpointExecutionTimes.findIndex( x=> x.userId==this.selectedUser );
    const uEt = uETIndex!=-1 ? this.usersEndpointExecutionTimes[uETIndex] : null;
    this.selectedUserEndpointExecutionTimes = Object.assign({}, uEt );
  }

  ngOnDestroy(){
    if( this.userEndpointExecutionTimes$ ){
      this.userEndpointExecutionTimes$.unsubscribe();
    }
    this.reportService.clearUsersEndpointExecutionTimes();
  }

}
