import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';

import { IIcons } from '../interfaces/icons';
import { DEFAULT_ICONS, DEFAULT_NOTIFICATION, DEFAULT_OPTIONS } from '../constants';

import { INotification } from '../interfaces/notification';
import { IOptions } from '../interfaces/options';

enum Type {
  success = 'success',
  error = 'error',
  alert = 'alert',
  warn = 'warn',
  info = 'info',
  bare = 'bare'
}

@Injectable()
export class CoolNotifierService {

  public icons: IIcons = DEFAULT_ICONS;
  public defOpts: IOptions = DEFAULT_OPTIONS;
  private subject = new Subject<INotification>();

  // Observable
  public notifier$ = this.subject.asObservable();

  constructor() { }

  build(notification: INotification, opts?: IOptions) {
    notification.id = Math.random().toString(36).substring(3);
    opts.animate = opts.animate !== undefined ? opts.animate : this.defOpts.animate;
    opts.clickToClose = opts.clickToClose !== undefined ? opts.clickToClose : this.defOpts.clickToClose;
    opts.customClass = opts.customClass !== undefined ? opts.customClass : this.defOpts.customClass;
    opts.position = opts.position !== undefined ? opts.position : this.defOpts.position;
    opts.rtl = opts.rtl !== undefined ? opts.rtl : this.defOpts.rtl;
    opts.timeOut = opts.timeOut !== undefined ? opts.timeOut : this.defOpts.timeOut;
    opts.withIcon = opts.withIcon !== undefined ? opts.withIcon : this.defOpts.withIcon;
    notification.opts = opts;
    this.subject.next(<INotification>notification);
  }

  remove(notification: INotification) {
    if (notification.toDelete) {
      this.subject.next(notification);
    }
  }

  success(title: string = '', content: string = '', opts: IOptions = DEFAULT_OPTIONS) {
    this.build(<INotification>{ title: title, content: content, type: Type.success, icon: this.icons.success }, opts);
  }

  error(title: string = '', content: string = '', opts: IOptions = DEFAULT_OPTIONS) {
    this.build(<INotification>{ title: title, content: content, type: Type.error, icon: this.icons.error }, opts);
  }

  warn(title: string = '', content: string = '', opts: IOptions = DEFAULT_OPTIONS) {
    this.build(<INotification>{ title: title, content: content, type: Type.warn, icon: this.icons.warn }, opts);
  }

  alert(title: string = '', content: string = '', opts: IOptions = DEFAULT_OPTIONS) {
    this.build(<INotification>{ title: title, content: content, type: Type.alert, icon: this.icons.alert }, opts);
  }

  info(title: string = '', content: string = '', opts: IOptions = DEFAULT_OPTIONS) {
    this.build(<INotification>{ title: title, content: content, type: Type.info, icon: this.icons.info }, opts);
  }

}