import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(
  ) { }

  convertParamsToUrlSearchParams(options: any): URLSearchParams {
    let params = new URLSearchParams();
    for(let key in options){
      params.set(key, options[key])
    }
    return params;
  }

  convertParamsToHttpParams(options: any): HttpParams {
    let httpParams: HttpParams = new HttpParams({});
    for(let key in options){
      httpParams.append(key, options[key])
    }
    return httpParams;
  }
}
