import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterByHourComponent } from './register-by-hour.component';

describe('RegisterByHourComponent', () => {
  let component: RegisterByHourComponent;
  let fixture: ComponentFixture<RegisterByHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterByHourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterByHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
