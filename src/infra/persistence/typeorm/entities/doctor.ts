import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'


import { User } from './user'

@Entity('doctors')
export class Doctor {
  constructor (params?: Partial<Doctor>) {
    Object.assign(this, params)
  }

  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'string' })
  crm: string

  @Column({ name: 'user_id' })
  public userId: number

  @OneToOne(() => User, user => user.id)
  @JoinColumn({ name: 'user_id' })
  public user: User

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: Date
}
