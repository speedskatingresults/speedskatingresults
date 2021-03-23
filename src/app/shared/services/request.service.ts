import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  URL: string;

  constructor(private http: HttpClient) {
    this.URL = environment.apiUrl + '/';
  }

  get(endpoint: string, params: string): any {
    return this.http.get(this.URL.concat(endpoint + params), {
      responseType: 'json'
    });
  }
}
