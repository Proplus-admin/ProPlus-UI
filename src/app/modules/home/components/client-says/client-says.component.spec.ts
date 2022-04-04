import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSaysComponent } from './client-says.component';

describe('ClientSaysComponent', () => {
  let component: ClientSaysComponent;
  let fixture: ComponentFixture<ClientSaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
