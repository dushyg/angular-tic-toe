import {Component, Input} from '@angular/core';
import {Tile} from '../../models/tile';
@Component({
selector: 'app-game-board',
templateUrl: './app-board.component.html',
styleUrls: ['./app-board.component.scss']
})
export class BoardComponent {

@Input() public boadSize: number;
  public tiles: Tile[] = Array.from({length: 9}, (index) => {
    return {
      tileIndex: index,
      tileValue: "X"
    } as Tile
  })


}