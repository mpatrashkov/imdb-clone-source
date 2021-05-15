import { Component, Input } from '@angular/core';
import { MovieCastMember } from '../../shared/types/movieCastMember';
import { PosterSize } from '../../shared/types/movie';

@Component({
  selector: 'app-movie-cast-member-image',
  templateUrl: './movie-cast-member-image.component.html',
  styleUrls: ['./movie-cast-member-image.component.scss'],
})
export class MovieCastMemberImageComponent {
  @Input() castMember: MovieCastMember;
  @Input() size: PosterSize = 'w154';
  @Input() width: string;
}
