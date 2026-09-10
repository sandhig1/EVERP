import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Leadview } from './leadview';

describe('Leadview', () => {
  let component: Leadview;
  let fixture: ComponentFixture<Leadview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Leadview],
    }).compileComponents();

    fixture = TestBed.createComponent(Leadview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
