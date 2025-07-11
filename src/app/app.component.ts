import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {fontAwesomeIcons} from './shared/font-awesome-icons';
import {NavigationComponent} from './layout/navigation/navigation.component';
import {LibraryComponent} from './layout/library/library.component';
import {HeaderComponent} from './layout/header/header.component';
import {ToastService} from '../service/toast.service';
import {NgbToast} from '@ng-bootstrap/ng-bootstrap';
import {PlayerComponent} from './layout/player/player.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontAwesomeModule, NavigationComponent, LibraryComponent, HeaderComponent, NgbToast, PlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'spotify-clone-front';

  private faIconLibrary = inject(FaIconLibrary);

  toastService = inject(ToastService);

  ngOnInit(): void {
    this.initFontAwesome();
  }

  private initFontAwesome() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}
