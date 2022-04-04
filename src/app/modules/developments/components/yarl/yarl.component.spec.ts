import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YarlComponent } from './yarl.component';

describe('YarlComponent', () => {
  let component: YarlComponent;
  let fixture: ComponentFixture<YarlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YarlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YarlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
