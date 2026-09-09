import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Enquirylistadmin } from './enquirylistadmin';

describe('Enquirylistadmin', () => {
  let component: Enquirylistadmin;
  let fixture: ComponentFixture<Enquirylistadmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Enquirylistadmin],
    }).compileComponents();

    fixture = TestBed.createComponent(Enquirylistadmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
