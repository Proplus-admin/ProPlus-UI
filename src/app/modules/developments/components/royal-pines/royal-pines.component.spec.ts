import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyalPinesComponent } from './royal-pines.component';

describe('RoyalPinesComponent', () => {
  let component: RoyalPinesComponent;
  let fixture: ComponentFixture<RoyalPinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoyalPinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoyalPinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
