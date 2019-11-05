import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellOfferPageComponent } from './sell-offer-page.component';

describe('SellOfferPageComponent', () => {
  let component: SellOfferPageComponent;
  let fixture: ComponentFixture<SellOfferPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellOfferPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellOfferPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
