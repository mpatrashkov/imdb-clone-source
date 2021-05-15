import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ImageModule } from '../ui/components/image/image.module';
import { PipesModule } from '../ui/pipes/pipes.module';
import { DirectivesModule } from '../ui/directives/directives.module';

@NgModule({
  declarations: [NavigationComponent, SearchComponent, SearchResultComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ImageModule,
    PipesModule,
    DirectivesModule,
  ],
  exports: [NavigationComponent],
})
export class NavigationModule {}
