import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Leadgeneration } from './leadgeneration';

describe('Leadgeneration', () => {
  let component: Leadgeneration;
  let fixture: ComponentFixture<Leadgeneration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Leadgeneration],
    }).compileComponents();

    fixture = TestBed.createComponent(Leadgeneration);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
