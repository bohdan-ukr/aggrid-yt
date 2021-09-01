import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ytInfo } from '../models/ytInfo.models'

@Injectable({
  providedIn: 'root'
})

export class YtDataService {

 // if error 403; Additional key: AIzaSyAwymeCHuncbJNQm8Kg5etc6CdOmRUuMfU

  apiKey = 'AIzaSyCvFQwNeJCpyGpFrtjvAsx6QYmc6Byjww8';
  url = `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&maxResults=50&type=video&part=snippet&q=john`;

  constructor(private http: HttpClient) { }

  getData():Observable<ytInfo> {
    return this.http.get<ytInfo>(this.url);
  }

}
