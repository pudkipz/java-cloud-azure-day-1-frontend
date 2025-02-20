import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './music/view/view.component';
import { AddAlbumComponent } from './music/add-album/add-album.component';
import { AddArtistComponent } from './music/add-artist/add-artist.component';
import { AddSongComponent } from './music/add-song/add-song.component';

const routes: Routes = [
  {
    path: 'music',
    component: ViewComponent
  },
  {
    path: 'add/album',
    component: AddAlbumComponent
  },
  {
    path: 'add/artist',
    component: AddArtistComponent
  },
  {
    path: 'add/song',
    component: AddSongComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
