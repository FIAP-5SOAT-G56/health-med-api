import UserCreateDto from "./user-create.dto";

export default interface DoctorWithCreateDto extends UserCreateDto {
  readonly crm: string;
}
