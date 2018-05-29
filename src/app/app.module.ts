import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CoolNotifierModule } from './modules/cool-notifier/cool-notifier.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoolNotifierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
