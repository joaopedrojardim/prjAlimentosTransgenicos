import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipertensaoComponent } from './hipertensao.component';

describe('HipertensaoComponent', () => {
  let component: HipertensaoComponent;
  let fixture: ComponentFixture<HipertensaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipertensaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HipertensaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
