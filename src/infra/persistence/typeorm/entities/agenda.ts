import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

import { Doctor } from './doctor'
import { Patient } from './patient'

@Entity('agenda')
export class Agenda {
  constructor (params?: Partial<Agenda>) {
    Object.assign(this, params)
  }

  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'doctor_id' })
  public doctorId: number

  @Column({ name: 'patient_id', nullable: true })
  public patientId?: number

  @ManyToOne(() => Doctor, doctor => doctor.id)
  @JoinColumn({ name: 'doctor_id' })
  public doctor: Doctor

  @ManyToOne(() => Patient, { nullable: true })
  @JoinColumn({ name: 'patient_id' })
  public patient?: Patient

  @Column({ name: 'liberada' })
  liberada: boolean

  @Column({ name: 'start_at' })
  startAt: Date

  @Column({ name: 'end_at' })
  endAt: Date

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: Date
}
