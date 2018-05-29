import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

import { Notification, CoolNotifierService } from './../services/cool-notifier.service';

export const DEFAULT_NOTIFICATION: Notification = {
  type: '',
  icon: '',
  title: '',
  content: ''
}

@Component({
  selector: 'cool-notifier',
  templateUrl: './cool-notifier.component.html',
  styleUrls: ['./cool-notifier.component.css']
})
export class CoolNotifierComponent implements OnInit {
  private notif: Notification = DEFAULT_NOTIFICATION;
  private notifrChanged: Subscription;

  /**
   * Creates an instance of MmiNotifrComponent.
   * @param {MmiNotifr} mmiNotifr 
   * @memberof MmiNotifrComponent
   */
  constructor(
    private service: CoolNotifierService
  ) { }

  ngOnInit() {
    this.notifrChanged = this.service.notifier$
      .subscribe((notif: Notification) => this.notif = notif);
  }

  ngOnDestroy() {
    this.notifrChanged.unsubscribe();
  }
}
