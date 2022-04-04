import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanReachComponent } from './ocean-reach.component';

describe('OceanReachComponent', () => {
  let component: OceanReachComponent;
  let fixture: ComponentFixture<OceanReachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OceanReachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OceanReachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
