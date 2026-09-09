import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Enquiryviewadmin } from './enquiryviewadmin';

describe('Enquiryviewadmin', () => {
  let component: Enquiryviewadmin;
  let fixture: ComponentFixture<Enquiryviewadmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Enquiryviewadmin],
    }).compileComponents();

    fixture = TestBed.createComponent(Enquiryviewadmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
