import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoolNotifierComponent } from './components/cool-notifier.component';
import { CoolNotifierService } from './services/cool-notifier.service';

@NgModule({
  imports: [
    CommonModule
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
