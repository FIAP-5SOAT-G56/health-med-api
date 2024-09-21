import { Environment } from '@/infra/web/nestjs/environment'
import UpdatePedidoRequest from '@/infra/web/nestjs/pedidos/dto/update-pedido.request'
import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiBody, ApiOkResponse, ApiOperation, ApiProperty } from '@nestjs/swagger'
import { SqsService } from '@ssut/nestjs-sqs'
import { v4 } from 'uuid'

class HealthCheck {
  @ApiProperty({ description: 'Health check status', enum: ['ok', 'error'], example: 'ok' })
  status: 'ok' | 'error'
}

@Controller()
export default class AppController {
  constructor(private readonly sqsService: SqsService) { }

  @Get()
  @ApiOperation({ summary: 'API index endpoint' })
  @ApiOkResponse({ description: 'API index endpoint', type: 'iRango Order API' })
  app(): string {
    return 'iRango Order API'
  }

  @Get('/health-check')
  @ApiOperation({ summary: 'Health check endpoint' })
  @ApiOkResponse({ description: 'Retorna o status da saúde do sistema', type: HealthCheck })
  healthCheck(): HealthCheck {
    return { status: 'ok' }
  }

  @Post()
  @ApiOperation({ summary: 'API index sendMessage' })
  @ApiBody({ type: UpdatePedidoRequest })

  @ApiOkResponse({ description: 'API index sendMessage', type: 'iRango Order sendMessage' })
  async sendMessage(@Body() body: any) {

    const message: any = JSON.stringify(body);
    console.log(body, message)
    try {
      await this.sqsService.send(Environment.CONFIRM_PAYMENT_QUEUE, {
        body: message,
        id: v4(),
      });
    } catch (error) {
      console.log('error in producing image!', error);
    }

  }
}
