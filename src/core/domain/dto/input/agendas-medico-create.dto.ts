export interface DateDto {
  readonly startAt: Date;
  readonly endAt: Date;
}

export default interface AgendasMedicoCreateDto {
  readonly crm: string;
  dates: DateDto[];
}
