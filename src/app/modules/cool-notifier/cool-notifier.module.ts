import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoolNotifierComponent } from './components/cool-notifier.component';
import { CoolNotifierService } from './services/cool-notifier.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [
    CoolNotifierComponent
  ],
  exports: [
    CoolNotifierComponent
  ],
  providers: [
    CoolNotifierService
  ]
})
export class CoolNotifierModule { }
