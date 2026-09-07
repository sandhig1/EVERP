import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dashboardadmin } from './dashboardadmin';

describe('Dashboardadmin', () => {
  let component: Dashboardadmin;
  let fixture: ComponentFixture<Dashboardadmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboardadmin],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboardadmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
