import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentsHomeComponent } from './developments-home.component';

describe('DevelopmentsHomeComponent', () => {
  let component: DevelopmentsHomeComponent;
  let fixture: ComponentFixture<DevelopmentsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopmentsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
