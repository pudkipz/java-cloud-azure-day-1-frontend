import { Component, inject } from '@angular/core';
import { MusicService } from '../../music.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-artist',
  standalone: false,
  templateUrl: './add-artist.component.html',
  styleUrl: './add-artist.component.css'
})
export class AddArtistComponent {
  musicService = inject(MusicService);
  addArtistForm: FormGroup;
  formBuilder = inject(FormBuilder);
  router = inject(Router)

  constructor() {
    this.addArtistForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  async addArtist() {
    if (await this.musicService.addArtist(this.addArtistForm.value.name)) {
      this.router.navigate(['music']);
      return;
    }
    // If something goes wrong (probably because artist name already exists), unhide error message
    (document.querySelector('#artist-form-error') as HTMLElement).style.display = 'flow';
  }

}
