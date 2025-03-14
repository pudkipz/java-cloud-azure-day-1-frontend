import { Album } from './album';
import { Artist } from './artist';

export interface Song {
    id: number;
    title: 'string';
    artist: Artist;
    album: Album;
}