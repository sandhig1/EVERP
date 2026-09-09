import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Enquirycreationcustomer } from './enquirycreationcustomer';

describe('Enquirycreationcustomer', () => {
  let component: Enquirycreationcustomer;
  let fixture: ComponentFixture<Enquirycreationcustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Enquirycreationcustomer],
    }).compileComponents();

    fixture = TestBed.createComponent(Enquirycreationcustomer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
