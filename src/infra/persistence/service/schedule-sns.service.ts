import { Injectable } from '@nestjs/common'

import { PublishCommand, SNSClient } from '@aws-sdk/client-sns'

import AwsConfig from '@/config/AwsConfig'
import { Environment as envs } from '@/infra/web/nestjs/environment'
import { ScheduleService } from '@/core/domain/service/schedule-service'
import { ScheduleEvents } from '@/core/domain/events/schedule.events'

@Injectable()
export default class ScheduleSNSService implements ScheduleService {
  constructor (
  ) {}

  async publishSchedule(event: ScheduleEvents): Promise<void> {
    console.log(`Consulta agendada`, event)
    const client = new SNSClient(AwsConfig)
    const command = new PublishCommand({
      TopicArn: envs.SNS_FIAP_HEALTH_MED_API_APPOINTMENT_CREATED,
      Message: JSON.stringify(event)
    })

    await client.send(command)
  }
}
