import { Component, inject } from '@angular/core';
import { MusicService } from '../../music.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-playlist',
  standalone: false,
  templateUrl: './add-playlist.component.html',
  styleUrl: './add-playlist.component.css'
})
export class AddPlaylistComponent {
  musicService = inject(MusicService);
  addPlaylistForm: FormGroup;
  formBuilder = inject(FormBuilder);
  router = inject(Router)

  constructor() {
    this.addPlaylistForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  async addPlaylist() {
    if (await this.musicService.addPlaylist(this.addPlaylistForm.value.name)) {
      this.router.navigate(['music']);
      return;
    }
    // If something goes wrong (probably because artist name already exists), unhide error message
    (document.querySelector('#playlist-form-error') as HTMLElement).style.display = 'flow';
  }

}
