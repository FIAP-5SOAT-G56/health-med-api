export default interface AgendaDto {
    readonly id: string;
    readonly id_doctor: string;
    readonly id_patient: string | undefined;
    readonly start_datetime: string;
    readonly end_datetime: string;
    readonly liberada: boolean;
}