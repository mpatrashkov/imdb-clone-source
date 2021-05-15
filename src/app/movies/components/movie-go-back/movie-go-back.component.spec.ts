import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieGoBackComponent } from './movie-go-back.component';

describe('MovieGoBackComponent', () => {
  let component: MovieGoBackComponent;
  let fixture: ComponentFixture<MovieGoBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieGoBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieGoBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
