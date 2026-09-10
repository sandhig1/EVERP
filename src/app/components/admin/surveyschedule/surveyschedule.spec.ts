import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Surveyschedule } from './surveyschedule';

describe('Surveyschedule', () => {
  let component: Surveyschedule;
  let fixture: ComponentFixture<Surveyschedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Surveyschedule],
    }).compileComponents();

    fixture = TestBed.createComponent(Surveyschedule);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
