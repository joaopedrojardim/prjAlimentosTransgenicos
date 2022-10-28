import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgCuriosidadesHComponent } from './cg-curiosidades-h.component';

describe('CgCuriosidadesHComponent', () => {
  let component: CgCuriosidadesHComponent;
  let fixture: ComponentFixture<CgCuriosidadesHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgCuriosidadesHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CgCuriosidadesHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
