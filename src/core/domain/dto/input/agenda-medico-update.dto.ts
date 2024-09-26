export default interface AgendaMedicoUpdateDto {
  readonly agendaId: number;
  readonly startAt: Date;
  readonly endAt: Date;
}
