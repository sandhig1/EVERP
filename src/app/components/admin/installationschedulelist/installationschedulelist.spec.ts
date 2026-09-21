import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Installationschedulelist } from './installationschedulelist';

describe('Installationschedulelist', () => {
  let component: Installationschedulelist;
  let fixture: ComponentFixture<Installationschedulelist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Installationschedulelist],
    }).compileComponents();

    fixture = TestBed.createComponent(Installationschedulelist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
