import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SWService } from '../star-wars.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() character;
  swService: SWService;

  constructor(swService: SWService) {
    this.swService = swService;
   }

  ngOnInit() {
  }

  onAssign(side) {
    this.swService.onSideChosen({name: this.character.name, side: side});
  }

}
