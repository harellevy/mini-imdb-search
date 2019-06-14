import { NgModule } from '@angular/core';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchService } from './search-results/search.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ResultItemComponent } from './search-results/result-item/result-item.component';
import { SharedModule } from '../shared/shared.module';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  declarations: [
    SearchResultsComponent,
    ResultItemComponent,
    MovieDetailsComponent,
  ],
  imports: [
    SharedModule,
    InfiniteScrollModule
  ],
  providers: [
    SearchService
  ],
  exports: [
    SearchResultsComponent
  ],
  entryComponents: [
    MovieDetailsComponent
  ]

})
export class FeaturesModule { }
