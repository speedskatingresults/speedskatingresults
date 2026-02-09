import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  URL: string;

  constructor(private http: HttpClient) {
    this.URL = environment.apiUrl + '/';
  }

  private static encodeQueryData(data: object): string {
    const queryData = [];
    for (const d of Object.keys(data)) {
      queryData.push(encodeURIComponent(d.toLowerCase()) + '=' + encodeURIComponent(data[d]));
    }
    return '?' + queryData.join('&');
  }

  public get(endpoint: string, params: object): Promise<any> {
    return this.http.get(this.URL.concat(endpoint + RequestService.encodeQueryData(params)), {
      responseType: 'json'
    }).toPromise();
  }
}
