import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAverageComponent } from './card-average.component';

describe('CardAverageComponent', () => {
  let component: CardAverageComponent;
  let fixture: ComponentFixture<CardAverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAverageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
