import { IOptions } from "./options";

export interface INotification {
    id?: string
    type: string
    icon: string
    title?: any
    content?: any
    opts?: IOptions
  }
