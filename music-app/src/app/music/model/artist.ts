import { Album } from './album';
import { Song } from './song';

export interface Artist {
    id: number;
    name: string;
    albums: Album[];
    songs: Song[];
}