import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieAllReviewsComponent } from './movie-all-reviews.component';

describe('MovieAllReviewsComponent', () => {
  let component: MovieAllReviewsComponent;
  let fixture: ComponentFixture<MovieAllReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieAllReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieAllReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
