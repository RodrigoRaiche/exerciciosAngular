import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsqueciSenha2Component } from './esqueci-senha2.component';

describe('EsqueciSenha2Component', () => {
  let component: EsqueciSenha2Component;
  let fixture: ComponentFixture<EsqueciSenha2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsqueciSenha2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsqueciSenha2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
