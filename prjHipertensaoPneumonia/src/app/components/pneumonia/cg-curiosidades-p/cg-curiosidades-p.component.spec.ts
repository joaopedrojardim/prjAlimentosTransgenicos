import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgCuriosidadesPComponent } from './cg-curiosidades-p.component';

describe('CgCuriosidadesPComponent', () => {
  let component: CgCuriosidadesPComponent;
  let fixture: ComponentFixture<CgCuriosidadesPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgCuriosidadesPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CgCuriosidadesPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
