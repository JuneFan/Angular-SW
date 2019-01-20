import { Component, OnInit } from '@angular/core';
import { SWService } from '../star-wars.service'
@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  availableSides = [{display: 'None', value: ''},
                    {display: 'Light', value: 'light'},
                    {display: 'Dark', value: 'dark'}];

  defaultValue = 'aaaaa';

  swService: SWService;
  constructor(swService: SWService) {
    this.swService = swService;
   }

  ngOnInit() {
  }

  onSubmit(form) {
    if (form.invalid) {
      return;
    }
    this.swService.addCharacter(form.value.name, form.value.side);
  }


}
