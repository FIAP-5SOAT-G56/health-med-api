export default interface AgendaMedicoUpdateDto {
    readonly agendaId:  number;
    readonly new_start_datetime: string;
    readonly new_end_datetime: string;
}