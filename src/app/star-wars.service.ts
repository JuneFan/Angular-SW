import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SWService {
  private characters = [
    {name: 'Luke Skywalker', side: 'dark'},
    {name: 'Darth Vader', side: 'light'}
  ];

  charactersChanged = new Subject<void>();
  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    });
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    });
    this.characters[pos].side = charInfo.side;
    this.charactersChanged.next();
  }

  addCharacter(name, side) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    });
    if ( pos !== -1 ) {
      return;
    }
    const newChar = { name: name, side: side };
    this.characters.push(newChar);
  }
}
