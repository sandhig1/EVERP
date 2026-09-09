import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Installationreqlistadmin } from './installationreqlistadmin';

describe('Installationreqlistadmin', () => {
  let component: Installationreqlistadmin;
  let fixture: ComponentFixture<Installationreqlistadmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Installationreqlistadmin],
    }).compileComponents();

    fixture = TestBed.createComponent(Installationreqlistadmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
