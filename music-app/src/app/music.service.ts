import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Artist } from './music/model/artist';
import { environment } from '../assets/environment';
import { firstValueFrom } from 'rxjs';
import { Song } from './music/model/song';
import { Album } from './music/model/album';
import { Playlist } from './music/model/playlist';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  http = inject(HttpClient);
  env = environment;

  // constructor() { }

  get playlists(): Promise<Playlist[]> {
    // @ts-ignore
    return firstValueFrom(this.http.get(
      `${this.env.apiUrl}/playlists`,
    ));
  }

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

  async addPlaylist(playlistName: string): Promise<boolean> {
    let playlists = await this.playlists;
    if (playlists.filter(pl => pl.name == playlistName).length > 0) {
      return false;
    }
    let s = firstValueFrom(await this.http.post(
      `${this.env.apiUrl}/playlists`, {
        name: playlistName
      },
      {headers: {'content-type': 'application/json'}}
    ))
    // console.log(s)
    return true;
  }

  async addAlbum(album: {title: string, artist: string}): Promise<boolean> {
    let albums = await this.albums;
    if (albums.filter(a => a.title == album.title).length > 0) {
      return false;
    }
    let artists = await this.artists;
    let artist = artists.find(a => a.name == album.artist);
    if (artist == null) return false;

    let s = firstValueFrom(await this.http.post(
      `${this.env.apiUrl}/albums`, {
        title: album.title,
        artist: artist.id
      },
      {headers: {'content-type': 'application/json'}}
    ))
    // console.log(s)
    return true;
  }

  async addArtist(artistName: string): Promise<boolean> {
    let artists = await this.artists;
    if (artists.filter(a => a.name == artistName).length > 0) {
      return false;
    }
    let s = firstValueFrom(await this.http.post(
      `${this.env.apiUrl}/artists`, {
        name: artistName
      },
      {headers: {'content-type': 'application/json'}}
    ))
    // console.log(s)
    return true;
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
    let s = firstValueFrom(await this.http.post(
      `${this.env.apiUrl}/songs`, {
        title: song.title,
        album: album.id,
        artist: artist.id
      },
      {headers: {'content-type': 'application/json'}})
    )
    
    return true;
  }


}
