import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JpCausasHComponent } from './jp-causas-h.component';

describe('JpCausasHComponent', () => {
  let component: JpCausasHComponent;
  let fixture: ComponentFixture<JpCausasHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JpCausasHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JpCausasHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
