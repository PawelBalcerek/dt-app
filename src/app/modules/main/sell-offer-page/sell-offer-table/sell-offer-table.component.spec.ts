import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellOfferTableComponent } from './sell-offer-table.component';

describe('SellOfferTableComponent', () => {
  let component: SellOfferTableComponent;
  let fixture: ComponentFixture<SellOfferTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellOfferTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellOfferTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
