import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Installationschedulecreation } from './installationschedulecreation';

describe('Installationschedulecreation', () => {
  let component: Installationschedulecreation;
  let fixture: ComponentFixture<Installationschedulecreation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Installationschedulecreation],
    }).compileComponents();

    fixture = TestBed.createComponent(Installationschedulecreation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
