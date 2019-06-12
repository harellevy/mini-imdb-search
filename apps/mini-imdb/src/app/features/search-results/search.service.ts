import { Injectable } from '@angular/core';
import { ISearchParams } from './search.types';
import { HttpClient } from '@angular/common/http';
import { Config } from '../../config';
import { RequestService } from '../../shared/request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(
    private httpClient: HttpClient,
    private requestService: RequestService
  ) { }

  find(params: ISearchParams): Observable<any> {
    params.apikey = Config.OMDB.API_KEY;
    let findParams = this.requestService.convertParamsToUrlSearchParams(params).toString();
    return this.httpClient.jsonp(`${Config.OMDB.ROOT_PATH}?${findParams}`, 'callback');
  }
}
