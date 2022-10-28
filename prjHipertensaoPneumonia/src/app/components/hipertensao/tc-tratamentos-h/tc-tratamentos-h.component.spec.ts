import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcTratamentosHComponent } from './tc-tratamentos-h.component';

describe('TcTratamentosHComponent', () => {
  let component: TcTratamentosHComponent;
  let fixture: ComponentFixture<TcTratamentosHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcTratamentosHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcTratamentosHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
