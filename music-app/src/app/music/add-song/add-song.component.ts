import { Component, inject } from '@angular/core';
import { MusicService } from '../../music.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-song',
  standalone: false,
  templateUrl: './add-song.component.html',
  styleUrl: './add-song.component.css'
})
export class AddSongComponent {
  musicService = inject(MusicService);
  addSongForm: FormGroup;
  formBuilder = inject(FormBuilder);
  router = inject(Router)
  albums = this.musicService.albums;
  artists = this.musicService.artists;

  constructor() {
    this.addSongForm = this.formBuilder.group({
      title: ['', Validators.required],
      album: ['', Validators.required],
      artist: ['', Validators.required],
    });
  }

  async addSong() {
    if (await this.musicService.addSong(this.addSongForm.value)) {
      this.router.navigate(['music']);
      return;
    }
    // If something goes wrong (probably because album or artist does not exist), unhide error message
    (document.querySelector('#song-form-error') as HTMLElement).style.display = 'flow';
  }

}
