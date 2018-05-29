import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MmiNotifrModule } from './modules/mmi-notifr/mmi-notifr.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MmiNotifrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
