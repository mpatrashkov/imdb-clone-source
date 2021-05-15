import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFullReviewComponent } from './movie-full-review.component';

describe('MovieFullReviewComponent', () => {
  let component: MovieFullReviewComponent;
  let fixture: ComponentFixture<MovieFullReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieFullReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieFullReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
