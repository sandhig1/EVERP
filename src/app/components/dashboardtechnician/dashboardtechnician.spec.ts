import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dashboardtechnician } from './dashboardtechnician';

describe('Dashboardtechnician', () => {
  let component: Dashboardtechnician;
  let fixture: ComponentFixture<Dashboardtechnician>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboardtechnician],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboardtechnician);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
