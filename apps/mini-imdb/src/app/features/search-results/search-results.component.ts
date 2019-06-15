import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { IMovieSearchResult, ISearchParams } from './search.types';
import { MatDialog } from '@angular/material';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'mini-imdb-search-page',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  searchResults: Partial<IMovieSearchResult> = {};
  searchInput: string;
  page = 1; // 1 is the default in api
  params: ISearchParams = {}; // 1 is the default in api
  validSearchInput = false;
  constructor(
    private searchService: SearchService,
    private modalService: MatDialog
  ) { }
  ngOnInit() {
  }

  openSearchResultModal(movie) {
    const dialogRef = this.modalService.open(MovieDetailsComponent, {
        width: '550px',
        panelClass: 'movie-modal',
        data: {movie: movie}
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      // if need to set something after modal closed
    });
  }

  search(params: ISearchParams) {
    // don't run if search query less then 3 chars.
    if (!params.s || params.s.length === 0) {
      // reset err msg
      this.validSearchInput = false;
      this.searchResults = null;
      return;
    }
    if (params.s && params.s.length < 3 && !params.y) {
      // just return;
      return;
    }
    // reset list to be nothing, should be populated soon if there are results
    this.searchResults = {Search: []};
    this.page = 1; // reset page to default
    // populate params (older params, page, and params passed)
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
