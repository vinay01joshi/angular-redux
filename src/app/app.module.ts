import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule , isDevMode } from '@angular/core';
import { NgRedux , NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { AppComponent } from './app.component';
import { fromJS, Map} from 'immutable';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDashboardComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>){
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
