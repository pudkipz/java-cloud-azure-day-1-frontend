import { Component, inject } from '@angular/core';
import { MusicService } from '../../music.service';

@Component({
  selector: 'app-playlists-view',
  standalone: false,
  templateUrl: './playlists-view.component.html',
  styleUrl: './playlists-view.component.css'
})
export class PlaylistsViewComponent {
  musicService = inject(MusicService);
  playlists = this.musicService.playlists;
}
