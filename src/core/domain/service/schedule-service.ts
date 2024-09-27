import { ScheduleEvents } from "../events/schedule.events";

export interface ScheduleService {
  publishSchedule(pedido: ScheduleEvents): Promise<void>;
}

export const IScheduleServiceSymbol = Symbol('IScheduleService')