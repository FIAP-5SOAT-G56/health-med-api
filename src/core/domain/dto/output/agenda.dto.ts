export default interface AgendaDto {
  readonly id: string;
  readonly id_doctor: string;
  readonly id_patient: string | undefined;
  readonly startAt: string;
  readonly endAt: string;
  readonly liberada: boolean;
}
