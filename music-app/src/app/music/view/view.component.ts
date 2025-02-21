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

  onMusicViewChange(event: any) {
    if (!this.selectedSongs.includes(event.target.value))
      this.selectedSongs.push(event.target.value);
  }

  onPlaylistViewChange(event: any) {
    this.selectedPlaylistId = event.target.value;
  }

  removeFromPlaylist() {
    // this.musicService.removeSongsFromPlaylist(this.selectedSongs, this.selectedPlaylistId);
  }

  addToPlaylist() {
    this.musicService.addSongsToPlaylist(this.selectedSongs, this.selectedPlaylistId);
  }
}
