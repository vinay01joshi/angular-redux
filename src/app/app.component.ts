import { Component } from '@angular/core';
import { Map } from 'immutable';
import { NgRedux, select } from '@angular-redux/store';


import { INCREMENT } from './actions';
import { IAppState } from './store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Redux Learning';
  @select(s => s.get('counter')) count;
  @select(['messaging','newMessages']) newMessages;
  @select( (s:IAppState) => s.messaging.newMessages) newMessagesCount;
  constructor(private ngRedux: NgRedux<Map<string,any>>){
  }

  increment(){
    // this.counter++;
    this.ngRedux.dispatch({type: INCREMENT });
  }
}
