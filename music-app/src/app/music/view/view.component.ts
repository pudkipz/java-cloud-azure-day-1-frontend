import { Component, inject } from '@angular/core';
import { MusicService } from '../../music.service';
import { Artist } from '../model/artist';

@Component({
  selector: 'app-view',
  standalone: false,
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  // musicService = inject(MusicService);

  // // constructor(private readonly musicService: MusicService) {}

  // artists = this.musicService.artists;

}
