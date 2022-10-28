import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlSintomasPComponent } from './pl-sintomas-p.component';

describe('PlSintomasPComponent', () => {
  let component: PlSintomasPComponent;
  let fixture: ComponentFixture<PlSintomasPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlSintomasPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlSintomasPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
