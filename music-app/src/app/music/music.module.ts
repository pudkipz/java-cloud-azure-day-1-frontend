import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { AddSongComponent } from './add-song/add-song.component';
import { AddArtistComponent } from './add-artist/add-artist.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ViewComponent,
    AddSongComponent,
    AddArtistComponent,
    AddAlbumComponent
  ],
  imports: [
    CommonModule, FormsModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class MusicModule { }
