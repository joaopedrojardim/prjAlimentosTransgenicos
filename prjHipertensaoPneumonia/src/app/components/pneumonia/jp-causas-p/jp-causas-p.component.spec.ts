import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JpCausasPComponent } from './jp-causas-p.component';

describe('JpCausasPComponent', () => {
  let component: JpCausasPComponent;
  let fixture: ComponentFixture<JpCausasPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JpCausasPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JpCausasPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
