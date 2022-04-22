import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingTelaComponent } from './loading-tela.component';

describe('LoadingTelaComponent', () => {
  let component: LoadingTelaComponent;
  let fixture: ComponentFixture<LoadingTelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingTelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
