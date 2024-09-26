export default interface AgendaMedicoUpdateDto {
  readonly agendaId: number;
  readonly new_startAt: string;
  readonly new_endAt: string;
}
