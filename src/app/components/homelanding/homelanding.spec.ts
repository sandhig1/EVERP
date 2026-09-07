import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apphome } from './homelanding';

describe('Apphome', () => {
  let component: Apphome;
  let fixture: ComponentFixture<Apphome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Apphome],
    }).compileComponents();

    fixture = TestBed.createComponent(Apphome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
