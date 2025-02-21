import { Component, inject } from '@angular/core';
import { MusicService } from '../../music.service';

@Component({
  selector: 'app-view',
  standalone: false,
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  musicService = inject(MusicService);
  selectedSongs: number[] = [];
  selectedPlaylistId: number = -1;
  selectedPlaylistSongs: Map<number, number[]> = new Map<number, number[]>();

  onMusicViewChange(event: any) {
    if (!this.selectedSongs.includes(event.target.value))
      this.selectedSongs.push(event.target.value);
  }

  onPlaylistViewChange(event: any) {
    this.selectedPlaylistId = event.target.value;
  }

  onPlaylistViewSongChange(event: any) {
    console.log(event)
    const playlistId: number = event.target.value.split(',')[0];
    const songIndex: number = event.target.value.split(',')[1];
    console.log(playlistId)
    console.log(songIndex)
    if (!this.selectedPlaylistSongs.has(playlistId)) {
      this.selectedPlaylistSongs.set(playlistId, [])
    }
    // @ts-ignore
    if (!this.selectedPlaylistSongs.get(playlistId).includes(songIndex)) {
      // @ts-ignore
      this.selectedPlaylistSongs.get(playlistId).push(songIndex);
    } else {
      this.selectedPlaylistSongs.get(playlistId)?.splice(songIndex, 1)
    }
  }

  removeFromPlaylist() {
    this.musicService.removeSongsFromPlaylist(this.selectedPlaylistSongs);
  }

  addToPlaylist() {
    this.musicService.addSongsToPlaylist(this.selectedSongs, this.selectedPlaylistId);
  }
}
