import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Quotationlistadmin } from './quotationlistadmin';

describe('Quotationlistadmin', () => {
  let component: Quotationlistadmin;
  let fixture: ComponentFixture<Quotationlistadmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quotationlistadmin],
    }).compileComponents();

    fixture = TestBed.createComponent(Quotationlistadmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
