import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dashboardcustomer } from './dashboardcustomer';

describe('Dashboardcustomer', () => {
  let component: Dashboardcustomer;
  let fixture: ComponentFixture<Dashboardcustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboardcustomer],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboardcustomer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
