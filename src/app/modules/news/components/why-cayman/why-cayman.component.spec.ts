import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyCaymanComponent } from './why-cayman.component';

describe('WhyCaymanComponent', () => {
  let component: WhyCaymanComponent;
  let fixture: ComponentFixture<WhyCaymanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyCaymanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyCaymanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
