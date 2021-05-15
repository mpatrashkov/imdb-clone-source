import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCastMemberImageComponent } from './movie-cast-member-image.component';

describe('MovieCastMemberImageComponent', () => {
  let component: MovieCastMemberImageComponent;
  let fixture: ComponentFixture<MovieCastMemberImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCastMemberImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCastMemberImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
