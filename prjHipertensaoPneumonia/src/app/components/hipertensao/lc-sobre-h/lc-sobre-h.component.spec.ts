import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LcSobreHComponent } from './lc-sobre-h.component';

describe('LcSobreHComponent', () => {
  let component: LcSobreHComponent;
  let fixture: ComponentFixture<LcSobreHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LcSobreHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LcSobreHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
