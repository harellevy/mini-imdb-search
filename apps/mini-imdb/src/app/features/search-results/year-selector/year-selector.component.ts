import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mini-imdb-year-selector',
  templateUrl: './year-selector.component.html',
  styleUrls: ['./year-selector.component.scss']
})
export class YearSelectorComponent {
  yearList: number[];
  @Input() disabled: boolean = false;
  @Output('update-year-changed') updateYearChanged = new EventEmitter();
  constructor() {
    // last 150 years
    this.yearList = new Array(150)
      .fill(0)
      .map((value, idx) => {
      return new Date().getFullYear() - idx;
    });
  }


  updateYear(event) {
    this.updateYearChanged.emit(event.value);
  }

}
