import { Component, OnInit, Input } from '@angular/core';
import { RootState } from 'src/app/store/root.state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MovieOverview } from '../../shared/types/movieOverview';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { addPersonalNoteToFavourite } from 'src/app/store/favourites/favourites.actions';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-movie-personal-note',
  templateUrl: './movie-personal-note.component.html',
  styleUrls: ['./movie-personal-note.component.scss'],
})
export class MoviePersonalNoteComponent implements OnInit {
  @Input() movieOverview: MovieOverview;

  personalNoteForm = new FormGroup({
    note: new FormControl(''),
  });

  get note(): AbstractControl {
    return this.personalNoteForm.get('note');
  }

  constructor(private store: Store<RootState>) {}

  ngOnInit() {
    this.store
      .pipe(
        select((state) => state.favourites.favourites[this.movieOverview.id]),
        take(1)
      )
      .subscribe((movie) => {
        this.note.setValue(movie.personalNote);
      });
  }

  submit() {
    this.store.dispatch(
      addPersonalNoteToFavourite({
        payload: {
          movieId: this.movieOverview.id,
          personalNote: this.note.value,
        },
      })
    );
  }
}
