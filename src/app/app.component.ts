import { Component } from '@angular/core';
import { CoolNotifierService } from './modules/cool-notifier/services/cool-notifier.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private service: CoolNotifierService) { }

  error() {
    this.service.error('test', 'test', { position: ['top', 'right'] });
  }

  success() {
    this.service.success('test', 'test');
  }

  info() {
    this.service.info('test', 'test');
  }

  alert() {
    this.service.success('test', 'test');
  }

  warn() {
    this.service.warn('test', 'test');
  }

  bare() {
    this.service.bare('test', 'test');
  }
}
