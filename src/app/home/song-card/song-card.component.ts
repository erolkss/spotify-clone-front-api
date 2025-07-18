import {Component, EventEmitter, input, OnInit, Output} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {animate, style, transition, trigger} from '@angular/animations';
import {ReadSong} from '../../../service/model/song.model';

@Component({
  selector: 'app-song-card',
  imports: [FontAwesomeModule],
  templateUrl: './song-card.component.html',
  styleUrl: './song-card.component.scss',
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({transform: 'translateY(10px)', opacity: 0}),
            animate('.2s ease-out',
              style({transform: 'translateY(0px)', opacity: 1}))
          ]
        ),
        transition(
          ':leave',
          [
            style({transform: 'translateY(0px)', opacity: 1}),
            animate('.2s ease-in',
              style({transform: 'translateY(10px)', opacity: 0}))
          ]
        ),
      ]
    )
  ]
})
export class SongCardComponent implements OnInit {

  song = input.required<ReadSong>();
  songDisplay: ReadSong = {favorite: false, displayPlay: false};
  @Output() songToPlay$ = new EventEmitter<ReadSong>();

  ngOnInit() {
    this.songDisplay = this.song();
  }

  onHoverPlay(displayIcon: boolean) {
    this.songDisplay.displayPlay = displayIcon;
  }

  play(): void {
    this.songToPlay$.next(this.songDisplay);
  }
}
