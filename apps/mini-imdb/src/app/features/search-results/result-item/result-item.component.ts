import { Component, Input, OnInit } from '@angular/core';
import { IMovieSearchSingleResult } from '../search.types';

@Component({
  selector: 'mini-imdb-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent implements OnInit {
  @Input() movie: IMovieSearchSingleResult;
  constructor() { }

  ngOnInit() {
  }

}
