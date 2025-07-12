import {Component, effect, inject, OnInit} from '@angular/core';
import {ReadSong} from '../../service/model/song.model';
import {SongService} from '../../service/song.service';
import {SongContentService} from '../../service/song-content.service';
import {SmallSongCardComponent} from '../shared/small-song-card/small-song-card.component';
import {FavoriteSongBtnComponent} from '../shared/favorite-song-btn/favorite-song-btn.component';

@Component({
  selector: 'app-favorite',
  imports: [
    SmallSongCardComponent,
    FavoriteSongBtnComponent
  ],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss'
})
export class FavoriteComponent implements OnInit {

  favoriteSongs: Array<ReadSong> = [];

  songService = inject(SongService);

  songContentService = inject(SongContentService);

  constructor() {
    effect(() => {
      let addOrRemoveFavoriteSongSig = this.songService.addOrRemoveFavoriteSongSig();
      if (addOrRemoveFavoriteSongSig.status === "OK") {
        this.songService.fetchFavorite();
      }
    });

    effect(() => {
      let favoriteSongState = this.songService.fetchFavoriteSongSig();
      if (favoriteSongState.status === "OK") {
        favoriteSongState.value?.forEach(song => song.favorite = true)
        this.favoriteSongs = favoriteSongState.value!;
      }
    });
  }

  ngOnInit(): void {
    this.songService.fetchFavorite();
  }

  onPlay(firstSong: ReadSong) {
    this.songContentService.createNewQueue(firstSong, this.favoriteSongs);
  }

}
