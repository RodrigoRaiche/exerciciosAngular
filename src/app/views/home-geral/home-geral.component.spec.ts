import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGeralComponent } from './home-geral.component';

describe('HomeGeralComponent', () => {
  let component: HomeGeralComponent;
  let fixture: ComponentFixture<HomeGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeGeralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
