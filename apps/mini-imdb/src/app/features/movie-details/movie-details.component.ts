import { Component, Inject, Input, OnInit } from '@angular/core';
import { IMovieByIdSingleResult, IMovieSearchSingleResult } from '../search-results/search.types';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SearchService } from '../search-results/search.service';

@Component({
  selector: 'mini-imdb-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<MovieDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {movie: IMovieByIdSingleResult},
    private movieService: SearchService
  ) {}

  closeModal(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.movieService.find({i: this.data.movie.imdbID}).subscribe((movieRes: IMovieByIdSingleResult) => {
      this.data.movie = {...this.data.movie, ...movieRes};
    })
  }

}
