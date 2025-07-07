import {Component} from '@angular/core';
import {FaIconComponent, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-library',
  imports: [
    FaIconComponent,
    FontAwesomeModule,
    RouterLink
  ],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent {

}
