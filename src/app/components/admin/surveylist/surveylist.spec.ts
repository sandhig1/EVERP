import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Surveylist } from './surveylist';

describe('Surveylist', () => {
  let component: Surveylist;
  let fixture: ComponentFixture<Surveylist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Surveylist],
    }).compileComponents();

    fixture = TestBed.createComponent(Surveylist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
