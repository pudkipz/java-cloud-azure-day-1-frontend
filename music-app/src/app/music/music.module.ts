import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { AddSongComponent } from './add-song/add-song.component';
import { AddArtistComponent } from './add-artist/add-artist.component';
import { AddAlbumComponent } from './add-album/add-album.component';



@NgModule({
  declarations: [
    ViewComponent,
    AddSongComponent,
    AddArtistComponent,
    AddAlbumComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MusicModule { }
