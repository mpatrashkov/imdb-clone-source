import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFullCastComponent } from './movie-full-cast.component';

describe('MovieFullCastComponent', () => {
  let component: MovieFullCastComponent;
  let fixture: ComponentFixture<MovieFullCastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieFullCastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieFullCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
