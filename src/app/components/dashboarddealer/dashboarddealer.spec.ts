import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dashboarddealer } from './dashboarddealer';

describe('Dashboarddealer', () => {
  let component: Dashboarddealer;
  let fixture: ComponentFixture<Dashboarddealer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboarddealer],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboarddealer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
