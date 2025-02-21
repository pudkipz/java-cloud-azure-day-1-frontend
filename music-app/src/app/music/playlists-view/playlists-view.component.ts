import { Component, EventEmitter, inject, Output } from '@angular/core';
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
  @Output() notifyView: EventEmitter<Event> = new EventEmitter();
  @Output() notifySongChange: EventEmitter<Event> = new EventEmitter();

  onChange(event: Event) {
    this.notifyView.emit(event);
  }

  onSongChange(event: Event) {
    this.notifySongChange.emit(event);
  }
}
