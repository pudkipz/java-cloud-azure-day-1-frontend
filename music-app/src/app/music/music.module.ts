import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { AddSongComponent } from './add-song/add-song.component';
import { AddArtistComponent } from './add-artist/add-artist.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PlaylistsViewComponent } from './playlists-view/playlists-view.component';
import { MusicViewComponent } from './music-view/music-view.component';
import { AddPlaylistComponent } from './add-playlist/add-playlist.component';



@NgModule({
  declarations: [
    ViewComponent,
    AddSongComponent,
    AddArtistComponent,
    AddAlbumComponent,
    PlaylistsViewComponent,
    MusicViewComponent,
    AddPlaylistComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class MusicModule { }
