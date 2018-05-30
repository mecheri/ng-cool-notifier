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
    this.service.error('test', 'test');
  }

  success() {
    this.service.success('test', 'test', { timeOut: 3000, clickToClose: false, withIcon: false });
  }

  info() {
    this.service.info('test', 'test');
  }

  alert() {
    this.service.alert('test', 'test');
  }

  warn() {
    this.service.warn('test', 'test');
  }
}
