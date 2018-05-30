import { IOptions } from "./options";

export interface INotification {
  id?: string;
  type: string;
  icon: string;
  state?: string;
  title?: any;
  content?: any;
  toDelete?: boolean;
  opts?: IOptions;
}
