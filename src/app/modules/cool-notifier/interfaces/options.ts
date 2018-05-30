import { Animate } from "../constants";

export interface IOptions {
  timeOut?: number;
  position?: string[];
  animate?: Animate;
  customClass?: string;
  clickToClose?: boolean;
  withIcon?: boolean;
  rtl?: boolean;
}
