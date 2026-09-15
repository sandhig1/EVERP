import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Projectcreation } from './projectcreation';

describe('Projectcreation', () => {
  let component: Projectcreation;
  let fixture: ComponentFixture<Projectcreation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projectcreation],
    }).compileComponents();

    fixture = TestBed.createComponent(Projectcreation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
