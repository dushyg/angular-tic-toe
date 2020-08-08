import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {TileComponent} from './tic-tac-toe/components/tile/tile.component';
import {BoardComponent} from './tic-tac-toe/containers/board/app-board.component';
import {GameComponent} from './tic-tac-toe/containers/game/game.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    GameComponent,
   BoardComponent, 
   TileComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
