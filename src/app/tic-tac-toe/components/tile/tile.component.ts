import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Tile} from '../../models/tile';

@Component({
selector: 'game-tile',
templateUrl: './tile.component.html',
styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  @Input() public tile: Tile;  
  @Output() public tileClicked = new EventEmitter<Tile>();


  public handleTileClick(): void {
    console.log('Clicked tile at index '+ this.tile.tileIndex);
    this.tileClicked.emit(this.tile);
  }
}