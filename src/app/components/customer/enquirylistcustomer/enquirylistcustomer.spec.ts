import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Enquirylistcustomer } from './enquirylistcustomer';

describe('Enquirylistcustomer', () => {
  let component: Enquirylistcustomer;
  let fixture: ComponentFixture<Enquirylistcustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Enquirylistcustomer],
    }).compileComponents();

    fixture = TestBed.createComponent(Enquirylistcustomer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
