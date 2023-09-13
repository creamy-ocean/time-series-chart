import { AREA_KEY, BAR_KEY } from "../consts/consts";

export interface ResponseData {
  [key: string]: LocationData;
}

export interface LocationData {
  id: string;
  [AREA_KEY]: number;
  [BAR_KEY]: number;
}

export interface TooltipProps {
  active: boolean;
  payload: any;
}

export interface ChartDataObject {
  time: string;
  id: string;
  [BAR_KEY]: number;
  [AREA_KEY]: number;
}
