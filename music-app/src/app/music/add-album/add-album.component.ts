import { Component, inject } from '@angular/core';
import { MusicService } from '../../music.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-album',
  standalone: false,
  templateUrl: './add-album.component.html',
  styleUrl: './add-album.component.css'
})
export class AddAlbumComponent {
  musicService = inject(MusicService);
  addAlbumForm: FormGroup;
  formBuilder = inject(FormBuilder);
  router = inject(Router)
  albums = this.musicService.albums;
  artists = this.musicService.artists;

  constructor() {
    this.addAlbumForm = this.formBuilder.group({
      title: ['', Validators.required],
      artist: ['', Validators.required],
    });
  }

  async addAlbum() {
    if (await this.musicService.addAlbum(this.addAlbumForm.value)) {
      this.router.navigate(['music']);
      return;
    }
    // If something goes wrong (probably because album or artist does not exist), unhide error message
    (document.querySelector('#album-form-error') as HTMLElement).style.display = 'flow';
  }

}
