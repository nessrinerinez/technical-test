import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GistsService {

  baseURL = 'https://api.github.com/';

  constructor(private http: HttpClient) { }

  search(terms: string) {
    return this.httpGet(this.generateUrl(terms))
  }

  generateUrl(term: string) {
    return term ? this.baseURL + 'users/' + term + '/gists' : '';
  }

  getForks(id: string) {
    let url = this.baseURL + `${id}` + '/forks';
    return this.httpGet(url)
  }

  httpGet(url: string) {
     return this.http.get(url)
  }

}