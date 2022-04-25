import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsCodeComponent } from './docs-code.component';

describe('DocsCodeComponent', () => {
  let component: DocsCodeComponent;
  let fixture: ComponentFixture<DocsCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
