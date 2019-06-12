import { NgModule } from '@angular/core';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchService } from './search-results/search.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ResultItemComponent } from './search-results/result-item/result-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SearchResultsComponent,
    ResultItemComponent
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

})
export class FeaturesModule { }
