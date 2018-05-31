import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs/internal/Subscription';

import { CoolNotifierService } from './../services/cool-notifier.service';

import { INotification } from '../interfaces/notification';
import { DEFAULT_NOTIFICATION } from '../constants';

import { IOptions } from '../interfaces/options';

@Component({
  selector: 'cool-notifier',
  templateUrl: './cool-notifier.component.html',
  styleUrls: ['./cool-notifier.component.css'],
})
export class CoolNotifierComponent implements OnInit {

  private subscription: Subscription;
  public notifications: INotification[] = [];
  public currNtf: INotification = DEFAULT_NOTIFICATION;

  constructor(
    private domSanitizer: DomSanitizer,
    private service: CoolNotifierService
  ) { }

  ngOnInit() {
    this.subscription = this.service.notifier$
      .subscribe((ntf: INotification) => {
        if (ntf.toDelete) {
          const idx = this.notifications.indexOf(ntf);
          this.notifications = this.notifications.filter((val, i) => i !== idx);
        } else {
          this.currNtf = ntf;
          this.notifications.push(ntf);
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
