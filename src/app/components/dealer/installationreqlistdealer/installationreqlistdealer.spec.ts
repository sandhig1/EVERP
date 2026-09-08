import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Installationreqlistdealer } from './installationreqlistdealer';

describe('Installationreqlistdealer', () => {
  let component: Installationreqlistdealer;
  let fixture: ComponentFixture<Installationreqlistdealer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Installationreqlistdealer],
    }).compileComponents();

    fixture = TestBed.createComponent(Installationreqlistdealer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
