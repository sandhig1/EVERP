import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Enquiryviewcustomer } from './enquiryviewcustomer';

describe('Enquiryviewcustomer', () => {
  let component: Enquiryviewcustomer;
  let fixture: ComponentFixture<Enquiryviewcustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Enquiryviewcustomer],
    }).compileComponents();

    fixture = TestBed.createComponent(Enquiryviewcustomer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
