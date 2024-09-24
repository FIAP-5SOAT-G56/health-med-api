import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { User } from './user'

@Entity('patients')
export class Patient {
  constructor (params?: Partial<Patient>) {
    Object.assign(this, params)
  }

  @PrimaryGeneratedColumn()
  id: number

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
