import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalDishesComponent } from './national-dishes.component';

describe('NationalDishesComponent', () => {
  let component: NationalDishesComponent;
  let fixture: ComponentFixture<NationalDishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalDishesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
