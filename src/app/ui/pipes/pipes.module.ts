import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingPercentPipe } from './rating-percent/rating-percent.pipe';
import { DurationPipe } from './duration/duration.pipe';
import { MarkdownPipe } from './markdown/markdown.pipe';
import { GenresPipe } from './genres/genres.pipe';

@NgModule({
  declarations: [RatingPercentPipe, DurationPipe, MarkdownPipe, GenresPipe],
  imports: [CommonModule],
  exports: [RatingPercentPipe, DurationPipe, MarkdownPipe, GenresPipe],
})
export class PipesModule {}
