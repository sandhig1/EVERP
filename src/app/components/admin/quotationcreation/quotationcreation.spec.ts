import { ComponentFixture, TestBed } from '@angular/core/testing';
import { quotationcreation } from './quotationcreation';

describe('Quotationgeneration', () => {
  let component: quotationcreation;
  let fixture: ComponentFixture<quotationcreation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [quotationcreation],
    }).compileComponents();

    fixture = TestBed.createComponent(quotationcreation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
