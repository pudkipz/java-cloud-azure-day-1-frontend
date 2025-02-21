import { Component, inject } from '@angular/core';
import { MusicService } from '../../music.service';
import { Artist } from '../model/artist';

@Component({
  selector: 'app-music-view',
  standalone: false,
  templateUrl: './music-view.component.html',
  styleUrl: './music-view.component.css'
})
export class MusicViewComponent {
  musicService = inject(MusicService);

  // constructor(private readonly musicService: MusicService) {}

  artists = this.musicService.artists;

}
