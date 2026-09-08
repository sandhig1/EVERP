import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Installationreqdealer } from './installationreqdealer';

describe('Installationreqdealer', () => {
  let component: Installationreqdealer;
  let fixture: ComponentFixture<Installationreqdealer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Installationreqdealer],
    }).compileComponents();

    fixture = TestBed.createComponent(Installationreqdealer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
