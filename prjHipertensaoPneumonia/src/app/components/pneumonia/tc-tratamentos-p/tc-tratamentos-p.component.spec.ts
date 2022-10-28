import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcTratamentosPComponent } from './tc-tratamentos-p.component';

describe('TcTratamentosPComponent', () => {
  let component: TcTratamentosPComponent;
  let fixture: ComponentFixture<TcTratamentosPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcTratamentosPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcTratamentosPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
