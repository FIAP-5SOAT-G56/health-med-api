import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('users')
export class User {
  constructor (params?: Partial<User>) {
    Object.assign(this, params)
  }

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  public name: string

  @Column()
  public cpf: string

  @Column()
  public email: string

  @Column()
  public password: string

  @Column()
  public salt: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: Date
}
