import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadMoreComponent } from './read-more/read-more.component';
import { LinkyModule } from 'ngx-linky';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [ReadMoreComponent],
  imports: [CommonModule, LinkyModule],
  exports: [ReadMoreComponent],
})
export class ReadMoreModule {}
