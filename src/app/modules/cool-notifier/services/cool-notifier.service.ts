import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

import { IIcons } from '../interfaces/icons';
import { DEFAULT_ICONS, DEFAULT_NOTIFICATION, DEFAULT_OPTIONS } from 'src/app/modules/cool-notifier/constants';

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
    notification.opts = opts ? opts : this.defOpts;
    this.subject.next(<INotification>notification);
  }

  success(title: string = '', content: string = '', opts?: IOptions) {
    this.build(<INotification>{ title: title, content: content, type: Type.success, icon: this.icons.success }, opts);
  }

  error(title: string = '', content: string = '', opts?: IOptions) {
    this.build(<INotification>{ title: title, content: content, type: Type.error, icon: this.icons.error }, opts);
  }

  warn(title: string = '', content: string = '', opts?: IOptions) {
    this.build(<INotification>{ title: title, content: content, type: Type.warn, icon: this.icons.warn }, opts);
  }

  alert(title: string = '', content: string = '', opts?: IOptions) {
    this.build(<INotification>{ title: title, content: content, type: Type.alert, icon: this.icons.alert }, opts);
  }

  info(title: string = '', content: string = '', opts?: IOptions) {
    this.build(<INotification>{ title: title, content: content, type: Type.info, icon: this.icons.info }, opts);
  }

  bare(title: any = '', content: any = '', opts?: IOptions) {
    this.build({title: title, content: content, type: Type.bare, icon: this.icons.bare }, opts);
  }
}