
import { SqsOptions } from '@ssut/nestjs-sqs/dist/sqs.types'

import { Environment } from '@/infra/web/nestjs/environment'

const config = {
  consumers: [
    {
      name: Environment.CONFIRM_PAYMENT_QUEUE,
      queueUrl: Environment.URL_QUEUE.concat(Environment.CONFIRM_PAYMENT_QUEUE),
      region: Environment.AWS_REGION,
    },
    {
      name: Environment.CREATED_PAYMENT_QUEUE,
      queueUrl: Environment.URL_QUEUE.concat(Environment.CREATED_PAYMENT_QUEUE),
      region: Environment.AWS_REGION,
    },
    {
      name: Environment.START_COOK_QUEUE,
      queueUrl: Environment.URL_QUEUE.concat(Environment.START_COOK_QUEUE),
      region: Environment.AWS_REGION,
    },
    {
      name: Environment.FINISH_COOK_QUEUE,
      queueUrl: Environment.URL_QUEUE.concat(Environment.FINISH_COOK_QUEUE),
      region: Environment.AWS_REGION,
    },
  ],
  producers: [
    {
      name: Environment.CONFIRM_PAYMENT_QUEUE,
      queueUrl: Environment.URL_QUEUE.concat(Environment.CONFIRM_PAYMENT_QUEUE), // the url of the queue
      region: Environment.AWS_REGION,
    },
  ],
} as SqsOptions

export default config
