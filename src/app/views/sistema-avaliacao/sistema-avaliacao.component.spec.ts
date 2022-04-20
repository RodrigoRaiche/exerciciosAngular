import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaAvaliacaoComponent } from './sistema-avaliacao.component';

describe('SistemaAvaliacaoComponent', () => {
  let component: SistemaAvaliacaoComponent;
  let fixture: ComponentFixture<SistemaAvaliacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemaAvaliacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemaAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
