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
    this.service.error(
      'Oops! Something went wrong!',
      `The application has encountered an unknown error.<br>
       Help us improve your experience by sending an error report`,
    );
  }

  success() {
    this.service.success(
      'Success',
      'Record has been successfully added',
      { timeOut: 5000, clickToClose: false, withIcon: true });
  }

  info() {
    this.service.info(
      'Info',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod id est sit amet maximus',
      { timeOut: 5000, clickToClose: false, withIcon: true });
  }

  alert() {
    this.service.alert(
      'Alert',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod id est sit amet maximus',
      { timeOut: 5000, clickToClose: false, withIcon: true });
  }

  warn() {
    this.service.warn(
      'Warning',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod id est sit amet maximus',
      { timeOut: 5000, clickToClose: false, withIcon: true });
  }
}

