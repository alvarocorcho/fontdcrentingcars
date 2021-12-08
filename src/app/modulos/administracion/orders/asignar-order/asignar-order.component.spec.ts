import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarOrderComponent } from './asignar-order.component';

describe('AsignarOrderComponent', () => {
  let component: AsignarOrderComponent;
  let fixture: ComponentFixture<AsignarOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
