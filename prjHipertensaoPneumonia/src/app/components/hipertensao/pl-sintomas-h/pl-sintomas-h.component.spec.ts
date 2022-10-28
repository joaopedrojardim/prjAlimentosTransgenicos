import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlSintomasHComponent } from './pl-sintomas-h.component';

describe('PlSintomasHComponent', () => {
  let component: PlSintomasHComponent;
  let fixture: ComponentFixture<PlSintomasHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlSintomasHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlSintomasHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
