import { Component } from '@angular/core';
import { SWService } from './star-wars.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SWService]
})
export class AppComponent {
  title = 'program';
}
