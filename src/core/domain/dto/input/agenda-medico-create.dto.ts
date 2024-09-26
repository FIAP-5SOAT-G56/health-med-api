export default interface AgendaMedicoCreateDto {
  readonly crm: string;
  readonly startAt: Date;
  readonly endAt: Date;
}
