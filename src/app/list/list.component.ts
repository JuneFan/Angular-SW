import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SWService } from '../star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  characters = [];
  activatedRoute: ActivatedRoute;
  swService: SWService;
  loadedSide = 'all';

  constructor(activatedRoute: ActivatedRoute, swService: SWService ) {
    this.activatedRoute = activatedRoute;
    this.swService = swService;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.characters = this.swService.getCharacters(params.side);
        this.loadedSide = params.side;
      }
    );
    // this.swService.charactersChanged.subscribe(
    //   (params) => {
    //     this.characters = this.swService.getCharacters(this.loadedSide);
    //   }
    // );
  }
}
