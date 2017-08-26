import { INCREMENT } from './actions';
import { IAppState } from './store';
import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Redux Learning';
  counter = 0;

  constructor(private ngRedux: NgRedux<IAppState>){

  }

  increment(){
    // this.counter++;
    this.ngRedux.dispatch({type: INCREMENT });
  }
}
