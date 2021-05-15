import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image/image.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [ImageComponent],
  imports: [CommonModule, LazyLoadImageModule],
  exports: [ImageComponent],
})
export class ImageModule {}
