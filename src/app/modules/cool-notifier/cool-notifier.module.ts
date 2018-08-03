import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoolNotifierService } from './services/cool-notifier.service';
import { CoolNotifierComponent } from './components/cool-notifier.component';
import { NotificationComponent } from './components/notification.component';

export * from './components/notification.component';
export * from './components/cool-notifier.component';
export * from './services/cool-notifier.service';
export * from './interfaces/icons';
export * from './interfaces/notification';
export * from './interfaces/options';
export * from './constants';

@NgModule({
  imports: [
    CommonModule,
    // BrowserAnimationsModule
  ],
  declarations: [
    CoolNotifierComponent,
    NotificationComponent
  ],
  exports: [
    CoolNotifierComponent,
  ],
  providers: [
    CoolNotifierService
  ]
})
export class CoolNotifierModule { }