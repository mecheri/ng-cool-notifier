import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoolNotifierService } from './services/cool-notifier.service';
import { CoolNotifierComponent } from './components/cool-notifier.component';
import { NotificationComponent } from './components/notification.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [
    CoolNotifierComponent,
    NotificationComponent
  ],
  exports: [
    CoolNotifierComponent
  ],
  providers: [
    CoolNotifierService
  ]
})
export class CoolNotifierModule { }
