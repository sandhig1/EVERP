import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Leadlist } from './leadlist';

describe('Leadlist', () => {
  let component: Leadlist;
  let fixture: ComponentFixture<Leadlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Leadlist],
    }).compileComponents();

    fixture = TestBed.createComponent(Leadlist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
