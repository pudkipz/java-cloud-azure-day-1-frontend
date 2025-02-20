import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Artist } from './music/model/artist';
import { environment } from '../assets/environment';
import { firstValueFrom } from 'rxjs';
import { Song } from './music/model/song';
import { Album } from './music/model/album';

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
    ));
  }

  get albums(): Promise<Album[]> {
    // @ts-ignore
    return firstValueFrom(this.http.get(
      `${this.env.apiUrl}/albums`,
    ));
  }

  get songs(): Promise<Song[]> {
    // @ts-ignore
    return firstValueFrom(this.http.get(
      `${this.env.apiUrl}/songs`,
    ));
  }

  async addSong(song: {title: string, artist: string, album: string}): Promise<boolean> {
    // console.log(song)
    let artists = await this.artists;
    let artist = artists.find(a => a.name == song.artist);
    let albums = await this.albums;
    let album = albums.find(a => a.title == song.album);
    if (!artist || !album) {
      return false
    }
    let s = await this.http.post(
      `${this.env.apiUrl}/songs`, {
        title: song.title,
        album: album.id,
        artist: artist.id
      }
    )
    
    return true;
  }


}
