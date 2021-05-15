import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePersonalNoteComponent } from './movie-personal-note.component';

describe('MoviePersonalNoteComponent', () => {
  let component: MoviePersonalNoteComponent;
  let fixture: ComponentFixture<MoviePersonalNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePersonalNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePersonalNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
