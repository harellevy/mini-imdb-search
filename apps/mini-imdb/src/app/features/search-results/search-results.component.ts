import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { IMovieSearchResult, ISearchParams } from './search.types';

@Component({
  selector: 'mini-imdb-search-page',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  searchResults: Partial<IMovieSearchResult> = {};
  searchInput: string;
  page: number = 1; // 1 is the default in api
  params: ISearchParams = {}; // 1 is the default in api
  validSearchInput = true;
  constructor(
    private searchService: SearchService
  ) { }
  ngOnInit() {
  }

  search(params: ISearchParams) {
    // don't run if search query less then 3 chars.
    if (params.s && params.s.length < 3 && !params.y) {
      return;
    }
    this.searchResults = {Search: []};
    this.page = 1; // reset page to default
    this.params = {...this.params, ...params, ...{page: this.page}};
    this.searchService.find(this.params).subscribe((searchResult: IMovieSearchResult) => {
      if (searchResult.Response !== 'True') {
        this.validSearchInput = false;
        return;
      }
      this.searchResults = searchResult;
      this.validSearchInput = true;
      // loads second page for big screens infinite scroll. (page full of items at first),
      // can be done also by applying min-height on wrapper element if wanted
      this.loadMore();
      return;
    })
  }

  async updateYearAndSearch(year) {
    this.params.y = year;
    return this.search(this.params);
  }


  async loadMore() {
    if (this.validSearchInput) {
      this.page++;
      this.params.page = this.page;
      this.searchService.find(this.params).subscribe((searchResult: IMovieSearchResult) => {
        if (searchResult.Response !== 'True') {
          this.validSearchInput = false;
          return;
        }
        this.searchResults.Search.push(...searchResult.Search);
        return;
      })
    }
  }

}
