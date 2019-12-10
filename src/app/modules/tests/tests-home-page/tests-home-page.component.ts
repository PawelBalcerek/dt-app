import { Component, OnInit } from '@angular/core';
import { Testservice } from 'src/app/core/services/tests.service';

@Component({
  selector: 'app-tests-home-page',
  templateUrl: './tests-home-page.component.html',
  styleUrls: ['./tests-home-page.component.css']
})
export class TestsHomePageComponent implements OnInit {

  constructor(public testservice: Testservice) {}

  ngOnInit() {
    this.testservice.getTestsParameters();
  }
}
