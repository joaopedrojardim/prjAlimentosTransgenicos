import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LcSobrePComponent } from './lc-sobre-p.component';

describe('LcSobrePComponent', () => {
  let component: LcSobrePComponent;
  let fixture: ComponentFixture<LcSobrePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LcSobrePComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LcSobrePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
