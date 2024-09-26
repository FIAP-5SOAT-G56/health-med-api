export enum Weekday {
  Monday = 0,
  Tuesday = 1,
  Wednesday = 2,
  Thursday = 3,
  Friday = 4,
  Saturday = 5,
  Sunday = 6,
}


export interface Generic {
  name: string;
  crm: string;
  startAt: Date;
  endAt: Date;
  weekdays: Weekday[]
}