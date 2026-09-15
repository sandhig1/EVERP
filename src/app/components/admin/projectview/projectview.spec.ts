import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Projectview } from './projectview';

describe('Projectview', () => {
  let component: Projectview;
  let fixture: ComponentFixture<Projectview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projectview],
    }).compileComponents();

    fixture = TestBed.createComponent(Projectview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
