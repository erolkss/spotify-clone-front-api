import { Component } from '@angular/core';
import {RouterLinkActive} from '@angular/router';
import {FaIconComponent, FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-navigation',
  imports: [
    RouterLinkActive,
    FaIconComponent,
    FontAwesomeModule,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

}
