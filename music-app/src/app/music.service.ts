import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Artist } from './music/model/artist';
import { environment } from '../assets/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  http = inject(HttpClient);
  env = environment;

  // constructor() { }

  get artists(): Promise<Artist[]> {
    // @ts-ignore
    return firstValueFrom(this.http.get(
      `${this.env.apiUrl}/artists`,
      // {headers: new HttpHeaders({'content-type': 'application/json'})} 
    ));
  }


}
