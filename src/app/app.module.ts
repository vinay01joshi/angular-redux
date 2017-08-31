import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule , isDevMode } from '@angular/core';
import { NgRedux , NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { AppComponent } from './app.component';
import { fromJS, Map} from 'immutable';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
  ngRedux: NgRedux<Map<string,any>>,
  devtools: DevToolsExtension){
    var enhancers = isDevMode() ? [devtools.enhancer()] :[];
    ngRedux.configureStore(rootReducer, fromJS(INITIAL_STATE),[],enhancers);
  }
}
