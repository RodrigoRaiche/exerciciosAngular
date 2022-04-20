import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoMultiplosComponent } from './calculo-multiplos.component';

describe('CalculoMultiplosComponent', () => {
  let component: CalculoMultiplosComponent;
  let fixture: ComponentFixture<CalculoMultiplosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculoMultiplosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculoMultiplosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
