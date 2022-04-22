import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestaAPIComponent } from './testa-api.component';

describe('TestaAPIComponent', () => {
  let component: TestaAPIComponent;
  let fixture: ComponentFixture<TestaAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestaAPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestaAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
