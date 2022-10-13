import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserdataComponent } from './userdata/userdata.component';
import { FormsModule} from '@angular/forms';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserdataComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
