import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeMaisPopularComponent } from './filme-mais-popular.component';

describe('FilmeMaisPopularComponent', () => {
  let component: FilmeMaisPopularComponent;
  let fixture: ComponentFixture<FilmeMaisPopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmeMaisPopularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeMaisPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
