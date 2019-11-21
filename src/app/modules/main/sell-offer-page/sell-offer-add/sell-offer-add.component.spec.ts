import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellOfferAddComponent } from './sell-offer-add.component';

describe('SellOfferAddComponent', () => {
  let component: SellOfferAddComponent;
  let fixture: ComponentFixture<SellOfferAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellOfferAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellOfferAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
