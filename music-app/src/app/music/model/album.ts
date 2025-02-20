import { Artist } from './artist';
import { Song } from './song';

export interface Album {
    id: number;
    title: string;
    artist: Artist;
    songs: Song[];
}